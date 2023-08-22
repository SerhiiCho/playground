module Calc where

main :: IO ()
main = do
    putStrLn "Enter first number: "
    firstNumber <- getLine

    putStrLn "Enter second number: "
    secondNumber <- getLine

    let firstNum = read firstNumber :: Int
    let secondNum = read secondNumber :: Int
    let sum = firstNum + secondNum

    putStrLn (firstNumber ++ " + " ++ secondNumber ++ " = " ++ (show sum))