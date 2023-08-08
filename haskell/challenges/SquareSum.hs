module SquareSum where

squareSum :: [Int] -> Int
squareSum nums = sum (map (^ 2) nums

main :: IO ()
main = do
    print (squareSum [1, 2])
