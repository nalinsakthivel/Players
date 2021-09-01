import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colours } from '../../../../Constants'

const Heading = (props) => <Text style={[styles.textContainer, props.style]}>{props.children}</Text>


export default Heading

const styles = StyleSheet.create({
    textContainer: {
        color: colours.White,
        fontSize: 25,
        fontFamily: "Nunito-Bold"

    }
})
