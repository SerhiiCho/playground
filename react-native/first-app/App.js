import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import Note from './components/Note'

export default function App() {
    const [noteText, setNoteText] = useState('')
    const [notes, setNotes] = useState([])

    function noteInputHandler(enteredText) {
        setNoteText(enteredText)
    }

    function addNoteHandler() {
        setNotes(currNotes => [
            ...currNotes,
            { text: noteText, key: Math.random().toString() },
        ])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Write a note...'
                    onChangeText={noteInputHandler}
                />
                <Button title="Add note" onPress={addNoteHandler} />
            </View>

            <View style={styles.notesContainer}>
                <FlatList data={notes}
                    renderItem={itemData => <Note note={itemData.item} />}
                    alwaysBounceVertical={false}
                />
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