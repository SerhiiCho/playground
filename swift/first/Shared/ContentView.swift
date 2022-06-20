//
//  ContentView.swift
//  Shared
//
//  Created by Serhii on 19.06.2022.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Some text")
            .padding(.all, 40)
            .background(Color.pink.blur(radius: 4.0))
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
