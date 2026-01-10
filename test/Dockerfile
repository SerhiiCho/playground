FROM debian:13.2

WORKDIR /app

RUN apt-get update \
    && apt-get install -y \
        git \
        php \
        python3 \
        python-is-python3 \
        libapache2-mod-php \
        curl \
        ghc \

COPY . .

CMD ["/bin/bash"]
