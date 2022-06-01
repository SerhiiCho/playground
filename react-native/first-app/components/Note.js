import { View, StyleSheet, Text } from 'react-native'

export default function Note({ note }) {
    return (
        <View style={styles.note}>
            <Text>{note.text}</Text>
        </View>
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