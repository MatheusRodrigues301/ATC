import React, { useState, useEffect } from 'react'
import { Alert, AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import AnimatedEllipsis from 'react-native-animated-ellipsis';

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function CreateUserEnd({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [documentNumberCpf, setDocumentNumberCpf] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('firstName').then(storagedFirstName => {
            if (storagedFirstName)
                setFirstName(storagedFirstName)
        })

        AsyncStorage.getItem('lastName').then(storagedLastName => {
            if (storagedLastName)
                setLastName(storagedLastName)
        })

        AsyncStorage.getItem('email').then(storagedEmail => {
            if (storagedEmail)
                setEmail(storagedEmail)
        })

        AsyncStorage.getItem('gender').then(storagedGender => {
            if (storagedGender)
                setGender(storagedGender)
        })

        AsyncStorage.getItem('documentNumberCpf').then(storagedDocumentNumberCpf => {
            if (storagedDocumentNumberCpf)
                setDocumentNumberCpf(storagedDocumentNumberCpf)
        })

        AsyncStorage.getItem('birthDate').then(storagedBirthDate => {
            if (storagedBirthDate)
                setBirthDate(storagedBirthDate)
        })

        AsyncStorage.getItem('phoneNumber').then(storagedPhoneNumber => {
            if (storagedPhoneNumber)
                setPhoneNumber(storagedPhoneNumber)
        })

        AsyncStorage.getItem('password').then(storagedPassword => {
            if (storagedPassword)
                setPassword(storagedPassword)
        })
    }, [])

    async function nextStep() {
        if (isValidForm()) {
            // await AsyncStorage.setItem('senha', documentNumberCpf)

            navigation.navigate('Login');
        } else {
            Alert.alert('Por favor, preencha todos os dados corretamente!')
        }
    }

    function isValid(item) {
        switch (item) {
            case 'password':
                return password.length >= 6;
                break;
            case 'confirmPassword':
                return confirmPassword === password;
                break;
            default:
                return false;
                break;
        }
    }

    function isValidForm() {
        return (
            isValid('password') &&
            isValid('confirmPassword')
        )
    }

    function handleBack() {
        navigation.navigate('CreateUserStep5')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                <View style={styles.form}>
                    <Text>
                        Tudo pronto :D
                    </Text>
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