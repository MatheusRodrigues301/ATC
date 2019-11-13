import React, { useState, useEffect } from 'react'
import { AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import api from '../../services/api'

import background from '../../assets/background.jpg'

export default function CreateUser({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {

    }, [])

    async function nextStep() {
        if (isValidForm()) {
            await AsyncStorage.setItem('firstName', firstName)
            await AsyncStorage.setItem('lastName', lastName)

            navigation.navigate('CreateUserStep2')
        }
    }

    function handleBack() {
        navigation.navigate('Login')
    }

    function isValid(item) {
        switch (item) {
            case 'firstName':
                return /^[A-Za-z]+$/.test(firstName);
                break;
            case 'lastName':
                return /^[A-Za-zx]+$/.test(lastName);
                break
            default:
                return false;
                break;
        }
    }

    function isValidForm() {
        return (
            isValid('firstName') &&
            isValid('lastName')
        )
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.information}>Olá, vamos começar seu cadastro!</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Seu Nome *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu nome"
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholderTextColor="#FFF"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    <Text style={styles.label}>Seu Sobrenome *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu sobrenome"
                        value={lastName}
                        secureTextEntry={true}
                        onChangeText={setLastName}
                        placeholderTextColor="#FFF"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.button} onPress={nextStep}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleBack}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    error: {
        marginTop: 0,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f05a5b',
    },

    information: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8
    },

    label: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 8
    },

    input: {
        borderWidth: 1,
        borderColor: '#FFF',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#FFF',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    img: {
        width: 140,
        height: 120
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})