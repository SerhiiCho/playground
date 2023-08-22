module Input where

main :: IO ()
main = do
    putStrLn "Enter your Age: "
    age <- getLine

    let ageAsNumber = read age :: Int
    let newAge = ageAsNumber + 10

    putStrLn ("In 10 years you will be " ++ show newAge ++ " years old.")