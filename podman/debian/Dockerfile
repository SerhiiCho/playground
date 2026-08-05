FROM docker.io/debian:13.2

RUN apt-get update && \
    apt-get install -y \
        socat \
        vim && \
    echo 'alias vi="vim"' >> ~/.bashrc && \
    echo 'alias ll="ls -hlaF"' >> ~/.bashrc && \
    mkdir -p /run/sockets
