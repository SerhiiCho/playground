-- If statement
travelToWork :: String -> IO ()
travelToWork weather = do
    if weather == "sunny"
        then putStrLn "Walking to work"
        else if weather == "cloudy"
            then putStrLn "Biking to work"
        else putStrLn "Driving to work"

main :: IO ()
main = do
    travelToWork "cloudy"