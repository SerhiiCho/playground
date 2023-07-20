-- List of Integers
scores :: [Int]
scores = [24, 25, 53, 92, 56, 74]

-- List of Strings
names :: [String]
names = ["Serhii", "Anna", "John", "Jane"]

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
