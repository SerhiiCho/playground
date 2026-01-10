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
        nodejs

# Install Go
RUN curl -O https://dl.google.com/go/go1.25.5.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go1.25.5.linux-amd64.tar.gz

COPY . .

CMD ["/bin/bash"]
