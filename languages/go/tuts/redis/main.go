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

	set("name", "Cool name")
	name := get("name")

	fmt.Println(name)
}

func connect() {
	conn, err = redis.DialURL("redis://redis:@localhost:6379/0")

	if err != nil {
		log.Fatalln(err)
	}
}

func get(name string) string {
	res, err := redis.String(conn.Do("GET", "name"))

	if err != nil {
		log.Fatalln(err)
	}

	return res
}

func set(key, value string) {
	_, err := conn.Do("SET", key, value)

	if err != nil {
		log.Println(err)
	}
}
