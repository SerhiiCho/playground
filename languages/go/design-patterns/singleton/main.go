package main

import (
	"fmt"
	"sync"
)

func main() {
	for i := 1; i < 10; i++ {
		go getLoggerInstance()
	}

	fmt.Scanln()
}

type MyLogger struct {
	loglevel int
}

func (l *MyLogger) Log(message string) {
	fmt.Println(l.loglevel, ":", message)
}

func (l *MyLogger) SetLogLevel(level int) {
	l.loglevel = level
}

var logger *MyLogger

// Use the sync package to enforce goroutine safety
var once sync.Once

func getLoggerInstance() *MyLogger {
	once.Do(func() {
		fmt.Println("Creating logger instance")
		logger = &MyLogger{}
	})

	fmt.Println("Returning logger instance")
	return logger
}
