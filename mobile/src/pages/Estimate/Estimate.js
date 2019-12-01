import React, { useState, useEffect } from 'react'
import { AsyncStorage, Alert, Picker, SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import logo from '../../assets/logo.png'
import CargoMock from '../../cargoMock'
import Drivers from '../../driversMock'

export default function Estimate({ navigation }) {
    const id = navigation.getParam('id')
    const [user, setUser] = useState('')
    const [driver, setDriver] = useState('')
    const [cargoName, setCargoName] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(storagedUser => {
            if (storagedUser)
                setUser(storagedUser)
        })

        setDriver(Drivers.find(item => item._id === id))
    }, [])

    async function handleSubmit() {
        Alert.alert('Sucesso!', `O seu orçamento foi enviado com sucesso para ${driver.name.split(' ')[0]}.`, [
            { text: 'Ok', onPress: () => navigation.navigate('Home') }
        ])
    }

    function handleBack() {
        navigation.navigate('Home')
    }

    function isValidForm() {
        return (
            cargoName !== ""
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.img} />

            <View style={styles.form}>
                <Text style={styles.label}>Motorista: {driver.name}</Text>
                <Text style={styles.label}>
                    Minha Carga *
                </Text>
                <Picker
                    selectedValue={cargoName}
                    onValueChange={(itemValue, itemIndex) => setCargoName(itemValue)}>
                    {CargoMock.map(item => <Picker.Item key={item.name} label={item.name} value={item.name} />)}
                </Picker>

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