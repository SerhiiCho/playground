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

func main() {
	db, err := sql.Open(sqlDriverName, sqlDataSourceName)
	PrintOnError(err)

	insertUser(db, User{
		Name: "Mikel",
		Age:  32,
	})

	printAll(db)
}

func insertUser(db *sql.DB, user User) {
	sql := `
		insert into users (name, age)
		values (?, ?)
	`

	res, err := db.Exec(sql, user.Name, user.Age)
	PrintOnError(err)

	id, err := res.LastInsertId()
	PrintOnError(err)

	fmt.Printf("User with id %d has been created\n", id)
}

func printAll(db *sql.DB) {
	rows, err := db.Query("select name, age from users")
	PrintOnError(err)

	var users []User

	defer rows.Close()

	for rows.Next() {
		var name sql.NullString
		var age sql.NullInt64

		rows.Scan(&name, &age)

		if !name.Valid || !age.Valid {
			fmt.Println("Name or Age is not valid")
		}

		users = append(users, User{
			Name: name.String,
			Age:  int(age.Int64),
		})
	}

	for _, user := range users {
		fmt.Printf("My name is %s, and I'm %d years old\n", user.Name, user.Age)
	}
}

func PrintOnError(err interface{}) {
	if err != nil {
		log.Fatalln(err)
	}
}

type User struct {
	Name string
	Age  int
}
