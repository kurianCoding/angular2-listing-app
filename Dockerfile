FROM ubuntu:latest

RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
    echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > /etc/apt/sources.list.d/mongodb.list && \
      apt-get update && \
        apt-get install -y mongodb-org && \
	rm -rf /var/lib/apt/lists/*
VOLUME ["/data/db"]
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y xz-utils
ENV NODE_VERSION 7.5.0
RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
 && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
 && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
 && ln -s /usr/local/bin/node /usr/local/bin/nodejs
RUN mkdir /code
WORKDIR /code
