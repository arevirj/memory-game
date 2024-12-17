import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import React from "react"
import GridButton from "./GridButton";

export default function Grid(){
    return(
        <View style= {styles.grid}>
            <View style= {styles.row}>
                <GridButton></GridButton>
                <GridButton></GridButton>
                <GridButton></GridButton>
            </View>
            <View style= {styles.row}>
                <GridButton></GridButton>
                <GridButton></GridButton>
                <GridButton></GridButton>
            </View>
            <View style= {styles.row}>
                <GridButton></GridButton>
                <GridButton></GridButton>
                <GridButton></GridButton>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        width: 400,
        height: 400,
        backgroundColor: "red",
    },
    row: {
        flexDirection: "row",
    }
})