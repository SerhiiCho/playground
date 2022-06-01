import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function NoteInput({ noteInputHandler, addNoteHandler }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
                placeholder='Write a note...'
                onChangeText={noteInputHandler}
            />
            <Button title="Add note" onPress={addNoteHandler} />
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