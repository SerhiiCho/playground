FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install \
        vim \
        golang -y

COPY src /src

VOLUME ${PWD}/src /src

WORKDIR /src