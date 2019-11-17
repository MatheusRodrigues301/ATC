import React, { useState, useEffect } from 'react'
import { AsyncStorage, SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'

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

            <View style={styles.form}>
                <Text style={styles.information}>Bem vindo!</Text>
                <TouchableOpacity style={styles.button} onPress={handleCargo}>
                    <Text style={styles.buttonText}>Cadastrar nova carga</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleList}>
                    <Text style={styles.buttonText}>Visualizar meus orçamentos</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#FFF'
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