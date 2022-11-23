import SwiftUI

struct ContentView: View {
    var body: some View {
        return ZStack {
            Image("background")
                .resizable()
                .ignoresSafeArea()
            
            VStack {
                Image("logo")
                
                Spacer()
                
                // Cards
                HStack {
                    Spacer()
                    
                    Image("card3")
                        .cornerRadius(4.0)
                    Spacer()
                    
                    Image("card4")
                        .cornerRadius(4.0)
                    
                    Spacer()
                }
                
                Spacer()
                
                // Deal button
                Image("dealbutton")
                    .padding(1)
                    .border(Color.red)
                    .cornerRadius(4.0)
                
                Spacer()
                
                // Points dashboard
                HStack {
                    Spacer()
                    
                    VStack {
                        Text("Player")
                            .font(.headline)
                            
                            .padding(.bottom, 1.0)
                        
                        
                        Text("0")
                            .font(.largeTitle)
                            .foregroundColor(Color.white)
                    }
                    
                    Spacer()
                    
                    VStack {
                        Text("CPU")
                            .font(.headline)
                            .foregroundColor(Color.white)
                            .padding(.bottom, 1.0)
                        
                        Text("0")
                            .font(.largeTitle)
                            .foregroundColor(Color.white)
                    }
                    
                    Spacer()
                }
                
                Spacer()
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
