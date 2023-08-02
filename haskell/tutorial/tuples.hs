main :: IO ()
main = do
    -- Tuple can have as many values as you want
    let myTuple = (33, "Serhii") :: (Int, String)

    print ("My name is " ++ snd myTuple)

    let inTenYears = (fst myTuple) + 10

    print ("In 10 years I will be " ++ (show inTenYears))