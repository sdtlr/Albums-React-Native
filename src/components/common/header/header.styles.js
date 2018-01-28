import React from "react";
import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F8F8",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"
    },
    headerText: {
        fontSize: 20
    }
});

export default headerStyles;
