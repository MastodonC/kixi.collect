(ns kixi.collect.process-manager)

(defprotocol IProcessManagerBackend
  (get-state [this event])
  (save-state! [this old-state new-state event new-id])
  (clean-up! [this event]))

(defprotocol IProcessManagerCollectionRequestBackend
  (get-batch [this campaign-id]))
