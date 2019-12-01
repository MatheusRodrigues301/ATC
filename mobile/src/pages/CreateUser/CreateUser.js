import React, { useState, useEffect } from 'react'
import { Alert, AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function CreateUser({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('firstName').then(storagedFirstName => {
            if (storagedFirstName)
                setFirstName(storagedFirstName)
        })

        AsyncStorage.getItem('lastName').then(storagedLastName => {
            if (storagedLastName)
                setLastName(storagedLastName)
        })
    }, [])

    async function nextStep() {
        if (isValidForm()) {
            await AsyncStorage.setItem('firstName', firstName)
            await AsyncStorage.setItem('lastName', lastName)

            navigation.navigate('CreateUserStep2')
        } else {
            Alert.alert('Erro!', 'Por favor, preencha todos os dados corretamente!')
        }
    }

    async function handleBack() {
        AsyncStorage.clear();
        navigation.navigate('Login')
    }

    function isValid(item) {
        switch (item) {
            case 'firstName':
                return /^[a-zA-Z\s]*$/.test(firstName);
                break;
            case 'lastName':
                return /^[a-zA-Z\s]*$/.test(lastName);
                break
            default:
                return false;
                break;
        }
    }

    function isValidForm() {
        return (
            (firstName !== "" && isValid('firstName')) &&
            (lastName !== "" && isValid('lastName'))
        )
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                <View style={styles.form}>
                    <Text style={styles.information}>Carto, vamos começar seu cadastro</Text>

                    <Text
                        style={[styles.label, (firstName !== "" && !isValid('firstName') ? styles.labelError : '')]}
                    >
                        Seu Nome *
                    </Text>
                    <TextInput
                        style={[styles.input, (firstName !== "" && !isValid('firstName') ? styles.inputError : '')]}
                        placeholder="Seu nome"
                        value={firstName}
                        onChangeText={setFirstName}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    {firstName !== "" && !isValid('firstName') && (
                        <Text style={styles.errorMessage}>
                            Neste campo é permitido somente letras
                        </Text>
                    )}

                    <Text
                        style={[styles.label, (lastName !== "" && !isValid('lastName') ? styles.labelError : '')]}
                    >
                        Seu Sobrenome *
                    </Text>
                    <TextInput
                        style={[styles.input, (lastName !== "" && !isValid('lastName') ? styles.inputError : '')]}
                        placeholder="Seu sobrenome"
                        value={lastName}
                        secureTextEntry={true}
                        onChangeText={setLastName}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    {lastName !== "" && !isValid('lastName') && (
                        <Text style={styles.errorMessage}>
                            Neste campo é permitido somente letras
                        </Text>
                    )}

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
        paddingHorizontal: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#FFF'
    },

    img: {
        width: 140,
        height: 100
    },

    errorMessage: {
        marginTop: -20,
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