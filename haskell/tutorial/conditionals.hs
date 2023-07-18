-- If statement
travelToWork :: String -> IO ()
travelToWork weather = do
    if weather == "sunny"
        then putStrLn "Walking to work"
        else if weather == "cloudy"
        then putStrLn "Biking to work"
        else putStrLn "Driving to work"


gradeMeaning :: String -> IO ()
gradeMeaning grade = do
    case grade of
        "A" -> putStrLn "Great work!"
        "B" -> putStrLn "Pretty good!"
        "C" -> putStrLn "You did alright"
        "D" -> putStrLn "Not so great"
        _   -> putStrLn "Sorry, you failed!"

main :: IO ()
main = do
    travelToWork "cloudy"
    gradeMeaning "B"