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

            <View style={styles.notesContainer}>
                <Text>List of notes...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flex: 1,
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 4,
        padding: 8,
        marginRight: 7,
    },
    notesContainer: {
        flex: 10,
    },
})