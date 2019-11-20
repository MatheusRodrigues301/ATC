import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { StyleSheet, Image, View, Text, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Drivers from '../driversMock'
// import api from '../services/api'

function DriversList({ tech, navigation }) {
    // const [spots, setSpots] = useState([])


    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Motoristas disponiveis</Text>
            <FlatList style={styles.list}
                data={Drivers}
                keyExtractor={driver => driver._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </View>
                )} />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 30,
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },

    bold: {
        fontWeight: 'bold'
    },

    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        marginRight: 15,

    },

    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },

    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
    },

    button: {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default withNavigation(DriversList)