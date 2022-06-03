import { View, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useState } from 'react'
import Btn from './Btn'

export default function NoteInput(props) {
    const [noteText, setNoteText] = useState('')

    function noteInputHandler(enteredText) {
        setNoteText(enteredText)
    }

    function addNoteHandler() {
        props.onAddNote(noteText)
        setNoteText('')
    }

    function hideModalHandler() {
        props.onModalHide(false)
    }

    return (
        <Modal visible={props.modalIsVisible} animationType="slide">
            <View style={styles.modalContainer}>
                <View>
                    <Text style={styles.header}>Write a note</Text>
                </View>

                <TextInput style={styles.textInput}
                    placeholder='Write a note...'
                    onChangeText={noteInputHandler}
                    multiline
                    numberOfLines={10}
                    value={noteText}
                />

                <View style={styles.buttonContainer}>
                    <Btn title="Add note" style={{ marginRight: 10 }} onPress={addNoteHandler} />
                    <Btn title="Cancel" onPress={hideModalHandler} />
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
        height: 200,
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        padding: 20,
        marginBottom: 23,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})