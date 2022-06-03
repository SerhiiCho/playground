import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Btn({ title, style }) {
    return (
        <TouchableOpacity style={{ ...styles.btn, ...style }}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'pink',
        paddingHorizontal: 40,
        paddingVertical: 13,
        borderRadius: 50,
    },
    text: {
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
})