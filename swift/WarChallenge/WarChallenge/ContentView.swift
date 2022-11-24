import SwiftUI

struct ContentView: View {
    @State private var playerCard = "card7"
    @State private var cpuCard = "card5"
    @State private var playerScore = 0
    @State private var cpuScore = 0
    
    var body: some View {
        ZStack {
            Image("background")
                .resizable()
                .ignoresSafeArea()
            
            VStack {
                Image("logo")
                
                Spacer()
                

                HStack {
                    Spacer()
                    
                    getCard(cardName: playerCard)
                    
                    Spacer()
                    
                    getCard(cardName: cpuCard)
                    
                    Spacer()
                }
                
                Spacer()
                
                // Deal button
                Button(action: handleDealButtonClick, label: {
                    Image("dealbutton")
                        .padding(1)
                        .border(Color.red)
                        .cornerRadius(4.0)
                })
                
                Spacer()
                
                // Points dashboard
                HStack {
                    Spacer()
                    
                    getPlayerSection(player: "Player", score: playerScore)
                    
                    Spacer()
                    
                    getPlayerSection(player: "CPU", score: cpuScore)
                    
                    Spacer()
                }
                
                Spacer()
            }
        }
    }
    
    func getCard(cardName: String) -> some View {
        Image(cardName)
            .cornerRadius(4.0)
    }
    
    func getPlayerSection(player: String, score: Int) -> some View {
        VStack {
            Text(player)
                .font(.headline)
                .foregroundColor(Color.white)
                .padding(.bottom, 1.0)
            
            Text(String(score))
                .font(.largeTitle)
                .foregroundColor(Color.white)
        }
    }
    
    func handleDealButtonClick() -> Void {
        let range = 2...14
        let playerRand = Int.random(in: range)
        let cpuRand = Int.random(in: range)
        
        playerCard = "card" + String(playerRand)
        cpuCard = "card" + String(cpuRand)
        
        if playerRand > cpuRand {
            playerScore += 1
        }
        
        if cpuRand > playerRand {
            cpuScore += 1
        }
        
        if cpuRand == playerRand {
            
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
