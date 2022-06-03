import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import Btn from './components/Btn'
import Note from './components/Note'
import NoteInput from './components/NoteInput'

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
        setNotes(currNotes => {
            return currNotes.filter(currNote => currNote.id !== id)
        })
    }

    function showModalHandler() {
        setModalIsVisible(true)
    }

    return (
        <View style={styles.appContainer}>
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
    )
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    notesContainer: {
        flex: 10,
    },
})