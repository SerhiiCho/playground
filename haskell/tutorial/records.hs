module Records where

data Student = Student
    { name  :: String
    , major :: String
    , age   :: Int
    , gpa   :: Double
    } deriving Show

main :: IO ()
main = do
    let student1 = Student
            { name = "Anna"
            , major = "Biology"
            , age = 25
            , gpa = 3.6
            }

    printStrLn (name student1)