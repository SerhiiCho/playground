import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'

export default function App() {
    const [outputText, setOutputText] = useState('Before click')

    return (
        <View style={{ padding: 50 }}>
            <View style={{ display: 'flex' }}>
                <Text style={styles.title}>My notes</Text>

                <TextInput
                    placeholder='Write a note'
                    style={styles.input}
                />
                <Button title="Add a note"
                    onPress={() => setOutputText('After click')}
                />
            </View>
        </View>
    )
}

const styles = {
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 7,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
    },
}