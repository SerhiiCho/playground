-- List of Integers
scores = [24, 25, 53, 92, 56, 74] :: [Int]

-- List ranges with .. operator (incremental)
daysInYear = [1 .. 12] :: [Int]

-- List ranges with .. operator (decremental)
daysInTheWeek = [7, 6 .. 1] :: [Int]
-- YOU HAVE TO PUT 2 NUMBERS instead of 1 to make it decremental. 6 .. 1 will not work

-- Infinite amount of numbers
allNumbers = [0 .. ] :: [Int]

-- List of Strings
names = ["Serhii", "Anna", "John", "Jane"] :: [String]

nicknames = ["Serz", "An", "Jo", "Jai"] :: [String]

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

    -- Concatenate two lists (plus plus operator)
    print (names ++ nicknames)

    -- Add element to the beginning of the list (colon operator)
    print ("Nikel" : names)