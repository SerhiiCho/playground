import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'

export default function App() {
    const [goal, setGoal] = useState('Before click')

    function goalInputHandler() {
        //
    }

    function addGoalHandler() {
        //
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Write a note' />
                <Button title="Add note" />
            </View>

            <View>
                <Text>List of notes...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        padding: 8,
        marginRight: 7,
    },
})