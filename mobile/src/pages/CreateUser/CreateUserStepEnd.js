import React, { useState, useEffect } from 'react'
import { Alert, AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api'

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'
import loadingImg from '../../assets/loading.gif'

export default function CreateUserStepEnd({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [documentNumberCpf, setDocumentNumberCpf] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('loading:true')

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

    async function handleSubmit() {
        let model = {
            name: firstName + " " + lastName,
            email,
            password,
            phoneNumber,
            documentNumberCpf,
            gender,
            birthDate,
            cargoInfos: ""
        }

        await api.post('/user', model)
            .then(({ resp }) => {
                console.log("TCL: handleSubmit -> resp", resp)
            }).catch(error => {
                console.log("TCL: handleSubmit -> error", error)
            })

        navigation.navigate('Login')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                {loading === true ? (
                    <View style={styles.loadingForm}>
                        <Image source={loadingImg} style={styles.loading} />
                    </View>
                ) : (
                        <View style={styles.form}>
                            <Text style={styles.information}>Tudo Pronto :)</Text>
                            <Icon name="check-circle" style={styles.checkCircule} size={50} color="#24de10" />

                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Finalizar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
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

    loadingForm: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#f2f2f2'
    },

    checkCircule: {
        textAlign: 'center'
    },

    img: {
        width: 140,
        height: 100
    },

    loading: {
        width: '100%',
        height: 300
    },

    errorMessage: {
        marginTop: -20,
        marginBottom: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f05a5b',
    },

    information: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center'
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 30,
        marginBottom: 10
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})