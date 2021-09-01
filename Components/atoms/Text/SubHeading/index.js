import React from 'react'
import { StyleSheet, Dimensions, Text } from 'react-native'
import { colours } from '../../../../Constants'

const screenWidth = Dimensions.get('window').width
const SubHeading = (props) => <Text style={[styles.textContainer, props.style]}>{props.children}</Text>

export default SubHeading

const styles = StyleSheet.create({
    textContainer: {
        color: colours.Black,
        fontSize: 18,
        fontFamily: "Nunito-Bold"

    }
})
