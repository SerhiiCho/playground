import { View, StyleSheet, Text, Pressable } from 'react-native'

export default function Note({ note, onDeleteNote }) {
    function deleteNoteHandler() {
        onDeleteNote(note.id)
    }

    return (
        <Pressable onPress={deleteNoteHandler}>
            <View style={styles.note}>
                <Text>{note.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    note: {
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: 'pink',
        padding: 15,
    },
})