package main

import (
	"bufio"
	"fmt"
	"net"
)

func main() {
	listener, _ := net.Listen("tcp", ":5000")

	for {
		conn, err := listener.Accept()

		if err != nil {
			fmt.Println("Can not connect!!")
			conn.Close()
			continue
		}

		fmt.Println("Connected")

		bufReader := bufio.NewReader(conn)
		fmt.Println("Start reading")

		go func(conn net.Conn) {
			defer conn.Close()

			for {
				rbyte, err := bufReader.ReadByte()

				if err != nil {
					fmt.Println("Cannot read!", err)
					break
				}

				fmt.Print(string(rbyte))
			}
		}(conn)
	}
}
