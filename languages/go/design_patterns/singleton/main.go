package main

import "fmt"

func main() {
	log := getLoggerInstance()

	log.SetLogLevel(1)
	log.Log("This is a log message")

	log = getLoggerInstance()
	log.SetLogLevel(2)
	log.Log("This is a log message")

	log = getLoggerInstance()
	log.SetLogLevel(3)
	log.Log("This is a log message")
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

func getLoggerInstance() *MyLogger {
	if logger == nil {
		fmt.Println("Creating logger instance")
		logger = &MyLogger{}
	}

	fmt.Println("Returning logger instance")
	return logger
}
