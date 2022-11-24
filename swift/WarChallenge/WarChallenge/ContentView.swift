import SwiftUI

struct ContentView: View {
    @State private var human = Player(card: "back", score: 0)
    @State private var cpu = Player(card: "back", score: 0)
    
    var dealButton: some View {
        Button(action: handleDealButtonClick, label: {
            Image("dealbutton")
        })
    }
    
    var body: some View {
        ZStack {
            background
            
            VStack {
                Image("logo")
                
                Spacer()
                
                cardsSection
                
                Spacer()
                
                dealButton
                
                Spacer()
                
                pointsDashbard
                
                Spacer()
            }
        }
    }
    
    var background: some View {
        Image("background")
            .resizable()
            .ignoresSafeArea()
            
    }
    
    var cardsSection: some View {
        HStack {
            Spacer()
                
            getCard(cardName: human.card)
            
            Spacer()
            
            getCard(cardName: cpu.card)
            
            Spacer()
        }
    }
    
    var pointsDashbard: some View {
        HStack {
            Spacer()
            
            getPlayerSection(player: "Player", score: human.score)
            
            Spacer()
            
            getPlayerSection(player: "CPU", score: cpu.score)
            
            Spacer()
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
        
        human.card = "card" + String(playerRand)
        cpu.card = "card" + String(cpuRand)
        
        if playerRand > cpuRand {
            human.score += 1
        }
        
        if cpuRand > playerRand {
            cpu.score += 1
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
