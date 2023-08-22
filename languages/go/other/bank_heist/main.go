package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())

	isHeistOn := true
	eludedGuards := rand.Intn(100)

	if eludedGuards >= 50 {
		fmt.Println("Looks like you've managed to make it past the guards.")
	} else {
		isHeistOn = false
		fmt.Println("Plan a better disguise next time?")
	}

	openedVault := rand.Intn(100)

	if isHeistOn && openedVault >= 70 {
		fmt.Println("Grab and GO!")
	} else if isHeistOn {
		isHeistOn = false
		fmt.Println("Vault can't be opened")
	}

	leftSafely := rand.Intn(5)

	if isHeistOn {
		switch leftSafely {
		case 0:
			isHeistOn = false
			fmt.Println("Can't leave the bank with money...")
		case 1:
			isHeistOn = false
			fmt.Println("Turns out vault doors don't open from the inside...")
		case 2:
			isHeistOn = false
			fmt.Println("You were too slow and SWAT got you")
		case 3:
			isHeistOn = false
			fmt.Println("Police got you arested!")
		default:
			fmt.Println("Start the gataway car!")
		}
	}

	ending(isHeistOn)
}

func ending(isHeistOn bool) {
	amtStolen := 10000 + rand.Intn(1000000)

	if isHeistOn {
		fmt.Printf("We did it! We got %d dollars!!\n", amtStolen)
	} else {
		fmt.Println("We faild the heist!!")
	}
}
