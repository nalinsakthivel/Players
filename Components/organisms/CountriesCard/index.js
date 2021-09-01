import React from 'react'
import { TouchableOpacity, Dimensions, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import { colours } from '../../../Constants'
import { Paragraph } from '../../atoms'


const screenWidth = Dimensions.get('window').width
const CountriesCard = ({ name, data }) => {
    const navigation = useNavigation();

    const onPress = () => navigation.push('Players', { players: data[name] })


    return (
        <View style={styles.viewContainer}>
            <TouchableOpacity style={styles.touchContainer} onPress={onPress}>
                <Paragraph style={styles.paragraphContainer}>{name}</Paragraph>
            </TouchableOpacity>
        </View>
    )
}

export default CountriesCard

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    touchContainer: {
        width: screenWidth * 0.87,
        height: 50,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        backgroundColor: colours.White,
        alignItems: 'center',
        justifyContent: 'center'

    },
    paragraphContainer: {
        textAlign: 'center'

    }
})
