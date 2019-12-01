import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { StyleSheet, Image, View, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Cargos from '../cargoMock';
// import api from '../services/api'

function CargoList({ navigation }) {
    // const [spots, setSpots] = useState([])

    useEffect(() => {

    }, [])

    function handleNavigate(id) {
        navigation.navigate('EditCargo', { id })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Minhas Cargas</Text>
            <FlatList style={styles.list}
                data={Cargos}
                keyExtractor={cargos => cargos._id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.name}>Nome: {item.name}</Text>
                        <Text style={styles.cargoType}>Tipo de Carga: {item.cargoType}</Text>
                        <Text style={styles.startDate}>Data de retirada: {item.startDate}</Text>
                        <Text style={styles.extimatedDate}>Data estimada de entraga: {item.extimatedDate}</Text>
                        <Text style={styles.homeAddress}>Endereço retirada: {item.homeAddress}</Text>
                        <Text style={styles.finalAddress}>Endereço entrega: {item.finalAddress}</Text>
                        <Text style={styles.obs}>Obs: {item.obs}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleNavigate(item._id)}>
                            <Text style={styles.buttonText}>Editar</Text>
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

    startDate: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },

    extimatedDate: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },

    homeAddress: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },

    finalAddress: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },

    obs: {
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

export default withNavigation(CargoList)