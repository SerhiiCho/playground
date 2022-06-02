import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
    return (
        <View style={styles.container}>
            <WebView source={{ uri: 'https://reactnative.dev/' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
})
