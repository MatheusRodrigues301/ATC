import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { StyleSheet, Image, View, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Drivers from '../driversMock'
// import api from '../services/api'

function DriversList({ navigation }) {
    // const [spots, setSpots] = useState([])

    useEffect(() => {

    }, [])

    function handleNavigate(id) {
        navigation.navigate('Estimate', { id })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Motoristas disponiveis</Text>
            <FlatList style={styles.list}
                data={Drivers}
                keyExtractor={driver => driver._id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Icon name="md-contact" style={styles.icon} size={50} />
                        <Text style={styles.name}>Nome: {item.name}</Text>
                        <Text style={styles.cargoType}>Tipo de transporte: Cargas {item.cargoType}</Text>
                        <Text style={styles.vehicleModel}>Tipo de veiculo: {item.vehicleModel}</Text>
                        <Text style={styles.phoneNumber}>Celular: {item.phoneNumber}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleNavigate(item._id)}>
                            <Text style={styles.buttonText}>Solicitar Orçamento</Text>
                        </TouchableOpacity>
                    </View>
                )} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
        textAlign: 'center'
    },

    bold: {
        fontWeight: 'bold'
    },

    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        marginRight: 15,
        borderBottomWidth: 1,
        marginBottom: 15
    },

    name: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },

    cargoType: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },

    vehicleModel: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },

    phoneNumber: {
        fontSize: 16,
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
        marginBottom: 10
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default withNavigation(DriversList)