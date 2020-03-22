cmake_minimum_required(VERSION 3.14)
project(first_program C)

set(CMAKE_C_STANDARD 99)

add_executable(first_program main.c printer.h)