import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the weather...</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#FFDDDD",
        paddingHorizontal: 30,
        paddingVertical: 100,
    },
    text: {
        color: "#383838",
        fontSize:30,
    },
})