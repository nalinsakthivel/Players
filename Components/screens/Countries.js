import React, { useEffect, useState } from 'react'
import { StatusBar, View, FlatList } from 'react-native'

import { FlatlistHeader } from '../molecules'
import { CountriesCard } from '../organisms/'

import { colours } from '../../Constants';

const Countries = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [countries, setCountries] = useState([])

    const getData = async () => {
        setLoading(true)
        const response = await fetch('http://test.oye.direct/players.json')
        const result = await response.json()
        setData(result)
        setCountries(Object.keys(result).sort((a, b) => a.localeCompare(b)))
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const ListHeaderComponent = () => <View>
        <StatusBar backgroundColor={colours.Pink} barStyle='light-content' />
        <FlatlistHeader >
            List Of Countries
        </FlatlistHeader>
    </View>

    const renderItem = ({ item }) => (
        <CountriesCard name={item} data={data} />
    )

    return (
        <FlatList
            ListHeaderComponent={
                ListHeaderComponent
            }
            refreshing={loading}
            onRefresh={getData}
            data={countries}
            horizontal={false}
            keyExtractor={item => item}
            renderItem={renderItem}
        />
    )
}

export default Countries
