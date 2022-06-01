import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function NoteInput({ addNoteHandler }) {
    const [noteText, setNoteText] = useState('')

    function noteInputHandler(enteredText) {
        setNoteText(enteredText)
    }

    function addingNoteHandler() {
        addNoteHandler(noteText)
        setNoteText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
                placeholder='Write a note...'
                onChangeText={noteInputHandler}
                value={noteText}
            />

            <Button title="Add note" onPress={addingNoteHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
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
})