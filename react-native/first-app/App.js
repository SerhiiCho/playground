import { useState } from 'react'
import { StyleSheet, View, FlatList, Image, Alert } from 'react-native'
import Btn from './components/Btn'
import Note from './components/Note'
import NoteInput from './components/NoteInput'
import { StatusBar } from 'expo-status-bar'

export default function App() {
    const [notes, setNotes] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)

    function addNoteHandler(enteredNoteText) {
        setNotes(currNotes => [
            ...currNotes,
            { text: enteredNoteText, id: Math.random().toString() },
        ])
        setModalIsVisible(false)
    }

    function deleteNoteHandler(id) {
        Alert.alert(
            'Sure?',
            'Are you sure you want to delete the note?',
            [
                {
                    text: "I'm sure",
                    onPress: () => {
                        setNotes(currNotes => {
                            return currNotes.filter(currNote => currNote.id !== id)
                        })
                    },
                    style: 'default',
                },
                {
                    text: "No",
                    onPress: () => { },
                    style: 'destructive',
                },
            ],
        )
    }

    function showModalHandler() {
        setModalIsVisible(true)
    }

    return (
        <>
            <StatusBar style='dark' />

            <View style={styles.appContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('./assets/logo.png')} />
                </View>

                <NoteInput modalIsVisible={modalIsVisible}
                    onAddNote={addNoteHandler}
                    onModalHide={setModalIsVisible}
                />

                <View style={{ alignItems: 'center' }}>
                    <Btn title="+ Add a note"
                        onPress={showModalHandler}
                        style={{ marginVertical: 20, width: 200 }}
                    />
                </View>

                <View style={styles.notesContainer}>
                    <FlatList data={notes}
                        renderItem={itemData => {
                            return (
                                <Note note={itemData.item} onDeleteNote={deleteNoteHandler} />
                            )
                        }}
                        alwaysBounceVertical={false}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 60,
        paddingHorizontal: 16,
        flex: 1,
    },
    notesContainer: {
        flex: 10,
        borderTopWidth: 1,
        borderTopColor: 'pink',
        paddingTop: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
})