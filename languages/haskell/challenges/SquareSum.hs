module SquareSum where

squareSum :: [Integer] -> Integer
squareSum nums = sum (map (^ 2) nums

main :: IO ()
main = do
    print (squareSum [1, 2])
