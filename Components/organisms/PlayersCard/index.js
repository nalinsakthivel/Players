import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colours } from '../../../Constants'
import { Paragraph } from '../../atoms'

const PlayersCard = ({ name, isCaptain }) => <View style={styles.viewContainer}>
    <Paragraph style={[styles.paragraphContainer, isCaptain && styles.captain]}>{name}</Paragraph>
</View >

export default PlayersCard

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    paragraphContainer: {
        textAlign: 'center'

    },
    captain: {
        color: colours.Lightpink
    }

})
