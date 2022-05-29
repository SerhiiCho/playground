import React, {useState} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

export default function App() {
    const [outputText, setOutputText] = useState('Before click')

    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button title="Click me" onPress={() => setOutputText('After click')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
