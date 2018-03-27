# Notes

- A 'collection request' is started with the `:kixi.collect/request-collection` command.
- It is then confirmed or rejected with events: `:kixi.collect/collection-requested` or `:kixi.collect/collection-request-rejected` respectively.
- Upon success - handling of the event - there are two aggregates and a process manager that spring to life:

## Aggregates

### REQUESTS
A single collection request event actually creates many 'REQUEST' (CR) entities; *one per group specified in the event*. CRs can be used for individual response tracking and schema reporting.

### CAMPAIGNS
A single 'CAMPAIGN' (CC) encompasses all of the CRs in a collection request event. It also retains information about the original event, such as `sender` and `message`.

`One CAMPAIGN has many COLLECTION REQUESTS`.

## Process Manager
The "process manager for collection requests" (PMCR) is responsible for coordinating the change of datastore permissions and the sending of emails to the relevant groups, informing them they can now add to a particular bundle.

The process manager runs on an FSM which plugs into the `kixi.comms` concept of chaining commands and events. The FSM is determined by the events that cause the state to progress - read more about this at https://github.com/ztellman/automat.

``` clojure
(def state-machine
  [[{:kixi.event/type :kixi.collect/collection-requested}            (a/$ :update-sharing-permission)]
   (a/or [{:kixi.event/type :kixi.datastore/sharing-changed}         (a/$ :send-group-email)]
         [{:kixi.event/type :kixi.datastore/sharing-change-rejected} (a/$ :fail)])
   (a/or [{:kixi.event/type :kixi.mailer/group-mail-accepted}        (a/$ :complete)]
         [{:kixi.event/type :kixi.mailer/group-mail-rejected}        (a/$ :fail)])])
```

Once the state has successfully advanced, the current node releases a command.

To recap, events are fed in and commands are received out. `kixi.comms` facilitates this chain.

- A 'collection request process' is started by the receipt of the `:kixi.collect/collection-requested` event.
- For each CR, an individual 'process manager state' (PMCR) is created which represents the journey of that particular CR. E.g. if there are three CRs, there will be three PMCRs created.
- PMCRs created by a single `:kixi.collect/collection-requested` event are linked via their parent CAMPAIGN - sometimes referred to as "their batch".
- When an individual PMCR is *advanced* **an entirely new PMCR is created**. It doesn't replace the existing PMCR; now two exist which both refer to the same CR.
- Detecting whether a 'batch' has completed (all the CRs in a CAMPAIGN has finished the process/FSM) becomes an exercise of checking each PMCR in a batch and seeing whether particular 'end states' (usually `:complete` or `:fail`) have been reached for a particular CR.

Example process manager batch table:

| CC | CR | PMCR | PMCR value                 |
|----|----|------|----------------------------|
| 1  | A  |  Z   | :update-sharing-permission |
| 1  | A  |  Y   | :send-group-email          |
| 1  | A  |  X   | :complete                  |
| 1  | B  |  W   | :update-sharing-permission |
| 1  | B  |  V   | :send-group-email          |
| 1  | B  |  U   | :complete                  |
| 1  | C  |  T   | :update-sharing-permission |
| 1  | C  |  S   | :fail                      |
| 2  | D  |  R   | :update-sharing-permission |
| 2  | D  |  Q   | :send-group-email          |
| 2  | D  |  P   | :complete                  |
