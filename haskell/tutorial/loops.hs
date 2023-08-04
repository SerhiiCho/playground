module Loops where

printTo100 :: Int -> IO ()
printTo100 num = do
    if num <= 100
        then do
            print num
            printTo100 (num + 1)
        else putStrLn("Completed the loop")

students :: [String]
students = ["Serhii", "Anna", "John", "Noah", "Sam"]

printStudents :: Int -> IO ()
printStudents num = do
    if num <= 4
        then do
            putStrLn (students !! num)
            printStudents (num + 1)
        else putStrLn "Printed all students!"

main :: IO ()
main = do
    printTo100 1
    printStudents 1