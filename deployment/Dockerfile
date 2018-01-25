FROM zittix/docker-baseimage-java8
MAINTAINER Tom Coupland <tom.coupland@mastodonc.com>

CMD ["/sbin/my_init"]

RUN apt-get update
RUN apt-get install -y \
software-properties-common \
python2.7 \
unzip

ENV JAR_LOCATION=/srv/kixi.collect.jar
ENV CONFIG_PROFILE=${environment}

ADD target/kixi.collect-standalone.jar /srv/kixi.collect.jar
ADD scripts/run.sh /etc/service/kixi.collect/run

EXPOSE 8080/tcp

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
