import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colours } from '../../../Constants'
import { SubHeading } from '../Text'

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <SubHeading style={styles.subHeading}>{props.children}</SubHeading>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: colours.Pink,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.White,
    },
    subHeading: {
        color: colours.Pink
    }
})
