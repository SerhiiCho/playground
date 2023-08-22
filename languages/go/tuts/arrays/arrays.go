package arrays

func GetEmails() map[string]string {
	return map[string]string{
		"bob":  "bob@protonmail.com",
		"alex": "alex@protonmail.com",
		"brad": "brad@protonmail.com",
	}
}

func GetColors() []string {
	return []string{"red", "green", "yellow"}
}

func AddAll(integers []int) int {
	result := 0

	for _, value := range integers {
		result += value
	}

	return result
}
