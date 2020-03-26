package models

// User model
type User struct {
	Name    string
	Age     uint
	IsAdmin bool
}

// GetAge returns the age of user
func (user *User) GetAge() uint {
	return user.Age
}

// GetName returns name
func (user *User) GetName() string {
	return user.Name
}
