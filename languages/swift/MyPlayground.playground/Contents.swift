import UIKit

extension String {
    func removeWhitespace() -> String {
        components(separatedBy: .whitespaces).joined()
    }
}


let alphabet = "A B C D E F G H I J K L M N O P"

print(alphabet.removeWhitespace())
