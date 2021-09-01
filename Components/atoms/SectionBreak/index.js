import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colours } from '../../../Constants'

const Sectionbreak = () => <View style={styles.viewContainer} />

export default Sectionbreak

const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 10,
        borderBottomWidth: 1,
        marginHorizontal: 40,
        borderBottomColor: colours.Grey
    }
})
