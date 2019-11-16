import React, { useState, useEffect } from 'react'
import { AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png'
import background from '../assets/background.jpg'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user)
                navigation.navigate('Home')
        })
    }, [])

    async function handleSubmit() {
        const response = await api.post('login-user', {
            email,
            password
        })

        const { _id } = response.data
        await AsyncStorage.setItem('user', _id)

        navigation.navigate('Home')
    }

    function handleCreateUser() {
        navigation.navigate('CreateUser')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                <View style={styles.form}>
                    <Text style={styles.information}>Olá, seja bem vindo!</Text>

                    <Text style={styles.label}>Seu Email *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={styles.label}>Sua Senha *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
                        <Text style={styles.buttonText}>Criar Conta</Text>
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
        width: 140,
        height: 100
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