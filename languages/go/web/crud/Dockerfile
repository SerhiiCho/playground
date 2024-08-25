FROM golang:1.23-alpine

WORKDIR /app

COPY . .

RUN go get && go build -o bin .

ENTRYPOINT ["/app/bin"]