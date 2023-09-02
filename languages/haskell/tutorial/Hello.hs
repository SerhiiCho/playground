module Hello where

main :: IO ()
main = do
    let name = "Serhii"
    let numOfGifts = 36

    -- This line prints Hello
    putStrLn ("Hello " ++ name ++ "! Nice to meet you!")
    putStrLn ("He has " ++ show numOfGifts ++ " gifts!")