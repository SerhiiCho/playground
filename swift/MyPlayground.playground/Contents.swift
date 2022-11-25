
class User {
    private var name: String
    private var password: String
    
    init(name: String, password: String) {
        self.name = name
        self.password = password
    }
    
    func getName() -> String {
        return name
    }
}

let user = User(name: "Serhii", password: "testpass")
print(user.getName())
