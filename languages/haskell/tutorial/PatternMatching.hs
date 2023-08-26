module PatternMatching where

-- This is pattern matching, we can do case of
getName :: String -> String
getName name = case name of
    "Serhii" -> "Great"
    "Anna" -> "Awesome An"
    _ -> "Some other name"

-- The alternative will be to define a function multiple times
getAge :: Int -> String
getAge 1 = "Only 1 year old"
getAge 2 = "Only 2 years old"
getAge age = "Wow! You are already more than " ++ show age ++ " years old"

main :: IO ()
main = do
    print (getName "Anna")
    print (getAge 18)

