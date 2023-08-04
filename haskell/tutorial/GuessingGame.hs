module GuessingGame where

maxGuesses :: Int
maxGuesses = 3

runGame :: Int -> IO ()
runGame guesses = do
    let secretNumber = "5"
    let userGuess = ""

    if guesses == maxGuesses
        then putStrLn ("Sorry! You exceeded all guesses!")
        else do
            putStrLn "Enter a guess number between 1 and 10: "
            userGuess <- getLine

            if userGuess == secretNumber
                then putStrLn "You Win!"
                else do
                    putStrLn ("You Lost! The number was: " ++ secretNumber)
                    runGame (guesses + 1)

main :: IO ()
main = do
    runGame 0