import React, { useState, useEffect } from 'react'
import { AsyncStorage, SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

import DriversList from '../components/driversList'
import logo from '../assets/logo.png'

export default function Home({ navigation }) {

    useEffect(() => {

    }, [])

    function handleCargo() {
        navigation.navigate('CreateCargo')
    }

    function handleList() {

    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.img} />
            <DriversList />
            <ActionButton buttonColor="#f05a5b">
                <ActionButton.Item buttonColor='#1abc9c' title="Cadastrar Carga" onPress={handleCargo}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Visualizar Orçamentos" onPress={handleCargo}>
                    <Icon name="md-clipboard" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#FFF'
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

    information: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 8,
        textAlign: 'center'
    },

    label: {
        fontWeight: 'bold',
        marginTop: 8
    },

    input: {
        borderWidth: 1,
        paddingHorizontal: 20,
        fontSize: 16,
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    img: {
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    },

    circleButton: {
        backgroundColor: '#f05a5b',
        borderRadius: 50,
        flexWrap: 'nowrap',
        position: 'absolute',
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 30
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 10
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})