import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Note from './components/Note'
import NoteInput from './components/NoteInput'

export default function App() {
    const [notes, setNotes] = useState([])

    function addNoteHandler(enteredNoteText) {
        setNotes(currNotes => [
            ...currNotes,
            { text: enteredNoteText, id: Math.random().toString() },
        ])
    }

    return (
        <View style={styles.appContainer}>
            <NoteInput addNoteHandler={addNoteHandler} />

            <View style={styles.notesContainer}>
                <FlatList data={notes}
                    renderItem={itemData => <Note note={itemData.item} />}
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