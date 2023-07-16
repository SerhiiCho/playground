sayHi :: String -> Int -> IO ()
sayHi name age = putStrLn ("Hello " ++ name ++ "! You are " ++ show age ++ " years old!")

main :: IO ()
main = do
    sayHi "Anna" 25