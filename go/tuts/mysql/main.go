package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

const (
	sqlDriverName     = "mysql"
	sqlDataSourceName = "serhii:111111@tcp(localhost:3306)/mysql_test?charset=utf8"
)

func PrintOnError(err interface{}) {
	if err != nil {
		log.Fatalln(err)
	}
}

type User struct {
	Name string
	Age  int
}

func main() {
	db, err := sql.Open(sqlDriverName, sqlDataSourceName)
	PrintOnError(err)

	rows, err := db.Query("select name, age from users")
	PrintOnError(err)

	var users []User

	for rows.Next() {
		var user User
		rows.Scan(&user.Name, &user.Age)
		users = append(users, user)
	}

	for _, user := range users {
		fmt.Printf("My name is %s, and I'm %d years old\n", user.Name, user.Age)
	}
}
