import React, { useState, useEffect } from 'react'
import { AsyncStorage, Alert, Picker, SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import logo from '../../assets/logo.png'

export default function Estimate({ navigation }) {
    const id = navigation.getParam('id')
    const [user, setUser] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(storagedUser => {
            if (storagedUser)
                setUser(storagedUser)
        })
    }, [])

    async function handleSubmit() {

    }

    function handleBack() {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.img} />

            <View style={styles.form}>
                <Text>{id}</Text>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Solicitar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleBack}>
                    <Text style={styles.buttonText}>Voltar</Text>
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

    img: {
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    },

    errorMessage: {
        marginTop: -10,
        marginBottom: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f05a5b',
    },

    inputError: {
        borderWidth: 1,
        borderColor: '#f05a5b',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#f05a5b',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    labelError: {
        fontWeight: 'bold',
        color: '#f05a5b'
    },

    information: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
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
        marginBottom: 10,
        borderRadius: 2
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