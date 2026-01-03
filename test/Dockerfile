FROM debian:13.2

RUN apt-get update && \
    apt-get install -y \
        git \
        php \
        python3 \
        python-is-python3 \
        libapache2-mod-php \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

CMD [ "/bin/bash" ]
