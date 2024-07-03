import React, { Component } from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"

import today from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={today} style={styles.background}>

                </ImageBackground>
                <View style={styles.tasklist}>
                    <Text>TaskList</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    tasklist: {
        flex: 7,
    },
})