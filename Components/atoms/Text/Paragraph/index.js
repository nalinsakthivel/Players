import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colours } from '../../../../Constants'

const Paragraph = (props) => <Text style={[styles.textContainer, props.style]}>{props.children}</Text>

export default Paragraph

const styles = StyleSheet.create({
    textContainer: {
        color: colours.Black,
        fontSize: 16,
        fontFamily: "Nunito-Bold"

    }
})
