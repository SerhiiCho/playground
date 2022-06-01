import { View, StyleSheet, Text, Pressable } from 'react-native'

export default function Note({ note, onDeleteNote }) {
    return (
        <Pressable onPress={onDeleteNote}>
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
        backgroundColor: '#eee',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
})