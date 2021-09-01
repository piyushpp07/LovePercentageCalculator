import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DisplayLove({ data }) {

    if (data === "loading") {
        return <Text>Loading</Text>
    }

    else
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{data.percentage}</Text>
                <Text style={styles.text}>{data.result}</Text>
            </View>)

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});