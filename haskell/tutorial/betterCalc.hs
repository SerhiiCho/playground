calculate :: Double -> Double -> String -> Double
calculate num1 num2 operator =
    if operator == "+"
        then (num1 + num2)
    else if operator == "-"
        then (num1 - num2)
    else if operator == "*"
        then (num1 * num2)
    else if operator == "/"
        then (num1 / num2)
    else error "Invalid operator"

main :: IO ()
main = do
    putStrLn "Enter the first number: "
    firstStr <- getLine

    putStrLn "Enter an operator: "
    operator <- getLine

    putStrLn "Enter the second number: "
    secondStr <- getLine

    let num1 = read firstStr :: Double
    let num2 = read secondStr :: Double

    let res = calculate num1 num2 operator

    putStrLn ("The result is: " ++ show res)