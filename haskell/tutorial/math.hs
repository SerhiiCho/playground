module Math where

main :: IO ()
main = do
    -- To the power of 2
    print (5 ** 2) -- will be 25.0

    -- Square root
    print (sqrt 36) -- will be 6.0, because 6 * 6 = 36

    -- Round the number
    print (round 2.6) -- will be 3
    print (floor 3.9) -- will be 3
    print (ceiling 2.1) -- will be 3