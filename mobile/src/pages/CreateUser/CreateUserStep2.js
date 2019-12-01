import React, { useState, useEffect } from 'react'
import { Alert, AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function CreateUserStep2({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('firstName').then(storagedFirstName => {
            if (storagedFirstName)
                setFirstName(storagedFirstName)
        })

        AsyncStorage.getItem('email').then(storagedEmail => {
            if (storagedEmail)
                setEmail(storagedEmail)
        })
    }, [])

    async function nextStep() {
        if (isValidForm()) {
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem('confirmEmail', confirmEmail)

            navigation.navigate('CreateUserStep3');
        } else {
            Alert.alert('Erro!', 'Por favor, preencha todos os dados corretamente!')
        }
    }

    function isValid(item) {
        switch (item) {
            case 'email':
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
                break;
            case 'confirmEmail':
                return email === confirmEmail;
                break
            default:
                return false;
                break;
        }
    }

    function isValidForm() {
        return (
            (email !== "" && isValid('email')) &&
            (confirmEmail !== "" && isValid('confirmEmail'))
        )
    }

    function handleBack() {
        navigation.navigate('CreateUser')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                <View style={styles.form}>
                    <Text style={styles.information}>Qual seu email, {firstName}</Text>

                    <Text
                        style={[styles.label, (email !== "" && !isValid('email') ? styles.labelError : '')]}
                    >
                        Seu e-mail *
                    </Text>
                    <TextInput
                        style={[styles.input, (email !== "" && !isValid('email') ? styles.inputError : '')]}
                        placeholder="Seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    {email !== "" && !isValid('email') && (
                        <Text style={styles.errorMessage}>
                            Este campo deve ser um e-mail
                        </Text>
                    )}

                    <Text
                        style={[styles.label, (confirmEmail !== "" && !isValid('confirmEmail') ? styles.labelError : '')]}
                    >
                        Confirme o e-mail *
                    </Text>
                    <TextInput
                        style={[styles.input, (confirmEmail !== "" && !isValid('confirmEmail') ? styles.inputError : '')]}
                        placeholder="Confirme seu e-mail"
                        value={confirmEmail}
                        onChangeText={setConfirmEmail}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    {confirmEmail !== "" && !isValid('confirmEmail') && (
                        <Text style={styles.errorMessage}>
                            Os e-mails não coincidem
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
        </ImageBackground >
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