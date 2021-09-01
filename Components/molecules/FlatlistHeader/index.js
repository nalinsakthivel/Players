import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Heading } from '../../atoms'

import { colours } from '../../../Constants'
import { Backicon } from '../../../Assets/Images'


const FlatlistHeader = ({ isShowBackButton = false, children }) => {

    const navigation = useNavigation()

    const onGoback = () => navigation.goBack()

    return (
        <View style={[styles.container, !isShowBackButton && styles.centerHeading]}>
            {isShowBackButton &&
                <TouchableOpacity onPress={onGoback} >
                    <Image style={styles.icon} source={Backicon} />
                </TouchableOpacity>}
            <Heading >{children}</Heading>
            {isShowBackButton && <View style={styles.icon} />}
        </View>

    )
}

export default FlatlistHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10,
        paddingTop: 0,
        backgroundColor: colours.Pink,
    }, centerHeading: {
        justifyContent: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },

})
