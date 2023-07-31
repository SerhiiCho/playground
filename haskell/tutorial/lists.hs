-- List of Integers
scores = [24, 25, 53, 92, 56, 74] :: [Int]

-- List of Strings
names = ["Serhii", "Anna", "John", "Jane"] :: [String]

nicknames = ["Serz", "An", "Jo", "Jai"]

main :: IO ()
main = do
    -- Print the first value of the list
    print (scores !! 0)
    print (head scores)

    -- Print the last value
    print (last scores)

    -- Print all except the last
    print (init scores)

    -- Print all except the first
    print (tail scores)

    -- Concatenate two lists
    let newList = names ++ nicknames

    print newList