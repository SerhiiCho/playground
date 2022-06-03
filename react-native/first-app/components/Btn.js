import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Btn(props) {
    return (
        <TouchableOpacity style={{ ...styles.btn, ...props.style }} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
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