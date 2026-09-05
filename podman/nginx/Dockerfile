FROM docker.io/library/nginx:1.31-trixie

RUN apt update && \
    apt install -y \
        bash \
        php \
        net-tools \
        vim && \
    echo 'alias vi="vim"' >> ~/.bashrc && \
    echo 'alias ll="ls -hlaF"' >> ~/.bashrc

RUN mkdir -p /app

COPY entrypoint /
COPY default.conf /etc/nginx/conf.d/
COPY index.php /app

ENTRYPOINT [ "/entrypoint" ]
