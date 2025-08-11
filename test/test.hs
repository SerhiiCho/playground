square :: Int -> Int
square x = x * x

sumNums :: Int -> Int -> Int
sumNums x y = x + y

main :: IO ()
main = do
   print (square 4)
   print (sumNums 4 5)
