package main

// User model
type User struct {
	Username string
	Age      int
}

// Greet to a user
func (user User) Greet() string {
	return "Hello " + user.Username
}

func main() {
	user := User{
		Username: "John",
		Age:      32,
	}

	println(user.Greet())
}
