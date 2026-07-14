FROM docker.io/alpine:3.24

RUN apk update && \
    apk add --no-cache \
        bash \
        supervisor \
        vim && \
    echo 'alias vi="vim"' >> ~/.bashrc

COPY supervisord.conf /etc/supervisord.conf

CMD [ "/usr/bin/supervisord", "-n" ]
