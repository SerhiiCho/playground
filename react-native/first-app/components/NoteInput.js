import { View, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useState } from 'react'
import Btn from './Btn'

export default function NoteInput({ onAddNote }) {
    const [noteText, setNoteText] = useState('')

    function noteInputHandler(enteredText) {
        setNoteText(enteredText)
    }

    function addNoteHandler() {
        onAddNote(noteText)
        setNoteText('')
    }

    return (
        <Modal>
            <View style={styles.modalContainer}>
                <View>
                    <Text style={styles.header}>Write a note</Text>
                </View>

                <TextInput style={styles.textInput}
                    placeholder='Write a note...'
                    onChangeText={noteInputHandler}
                    value={noteText}
                />

                <View style={styles.buttonContainer}>
                    <Btn title="Add note" style={{ marginRight: 10 }} onPress={addNoteHandler} />
                    <Btn title="Cancel" />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 25,
        color: '#e88b9c',
        fontWeight: 'bold',
    },
    modalContainer: {
        justifyContent: 'center',
        flex: 1,
        padding: 30,
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        padding: 18,
        marginBottom: 23,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})