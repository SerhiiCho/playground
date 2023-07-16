sayHi :: String -> Int -> IO ()
sayHi name age = putStrLn ("Hello " ++ name ++ "! You are " ++ show age ++ " years old!")

cube :: Int -> Int
cube num = num * num * num

createFullName :: String -> String -> String
createFullName first last = first ++ " " ++ last

main :: IO ()
main = do
    sayHi "Anna" 25
    putStrLn (show (cube 3))

    let fullName = createFullName "Anna" "Korotchaeva"

    putStrLn fullName