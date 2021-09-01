import React, { useState } from 'react'
import { FlatList, StyleSheet, StatusBar, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Paragraph, Button, SectionBreak } from '../atoms'
import FlatlistHeader from '../molecules/FlatlistHeader'
import { PlayersCard } from '../organisms'

import { colours } from '../../Constants'

const Players = () => {
    const route = useRoute()
    const { players } = route.params
    const [playersList, setPlayersList] = useState(players)


    const onSortbyfirstName = () => {
        let data = [...players]
        setPlayersList(data.sort((a, b) => a.name.localeCompare(b.name)))
    }

    const onSortbylastName = () => {
        let data = [...players]
        setPlayersList(data.sort((a, b) => a.name.split(' ')[1].localeCompare(b.name.split(' ')[1])))
    }

    const listHeaderComponent = () => <View>
        <StatusBar backgroundColor={colours.Pink} barStyle='light-content' />
        <FlatlistHeader isShowBackButton>List Of Players </FlatlistHeader>
        <Paragraph style={styles.paragraph}>
            Sort By
        </Paragraph>
        <View style={styles.butonView}>
            <Button onPress={onSortbyfirstName} >FirstName</Button>
            <Button onPress={onSortbylastName}>LastName</Button>
        </View>
        <SectionBreak />
    </View>


    const renderItem = ({ item }) => (
        <PlayersCard name={item.name} isCaptain={item.captain} />
    )

    return (
        <FlatList
            ListHeaderComponent={listHeaderComponent}
            extraData={playersList}
            horizontal={false}
            numColumns={1}
            data={playersList}
            keyExtractor={item => item.name}
            renderItem={renderItem}
        />
    )
}

export default Players

const styles = StyleSheet.create({
    paragraph: {
        margin: 10,
    },
    butonView: {
        flexDirection: 'row',
    }

})
