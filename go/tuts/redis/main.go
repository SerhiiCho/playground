package main

import (
	"fmt"
	"log"

	"github.com/garyburd/redigo/redis"
)

var (
	conn redis.Conn
	err  error
)

func main() {
	connect()
	defer conn.Close()
	printName()
}

func connect() {
	conn, err = redis.DialURL("redis://redis:@localhost:6379/0")

	if err != nil {
		log.Fatalln(err)
	}
}

func printName() {
	res, err := redis.String(conn.Do("GET", "name"))

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(res)
}
