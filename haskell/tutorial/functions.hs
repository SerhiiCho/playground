module Functions where

import Data.List (intercalate)

-- Function that prints out a string
sayHi :: String -> Int -> IO ()
sayHi name age = putStrLn ("Hello " ++ name ++ "! You are " ++ show age ++ " years old!")

-- Inline function with one argument
cube :: Int -> Int
cube num = num * num * num

-- Inline function with multiple arguments
createFullName :: String -> String -> String
createFullName first last = first ++ " " ++ last

-- Pattern matching function (guards)
yourNameIs :: String -> String
yourNameIs name
  | name == "Serhii" = "You like Anna"
  | name == "Anna" = "You like Serhii"
  | otherwise = "You like someone else"

main :: IO ()
main = do
    sayHi "Anna" 25
    putStrLn (show (cube 3))

    let fullName = createFullName "Anna" "Korotchaeva"

    putStrLn fullName
    putStrLn (yourNameIs "Serhii")

    let prettyGirls = ["Anna", "Sasha", "Maria", "Kseniya"]
    let joinedGirls = intercalate ", " prettyGirls

    putStrLn ("Pretty girls are: " ++ joinedGirls)