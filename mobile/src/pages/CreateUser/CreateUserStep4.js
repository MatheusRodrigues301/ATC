import React, { useState, useEffect } from 'react'
import { Alert, AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function CreateUserStep4({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [documentNumberCpf, setDocumentNumberCpf] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('firstName').then(storagedFirstName => {
            if (storagedFirstName)
                setFirstName(storagedFirstName)
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
    }, [])

    async function nextStep() {
        if (isValidForm()) {
            await AsyncStorage.setItem('documentNumberCpf', documentNumberCpf)
            await AsyncStorage.setItem('birthDate', birthDate)
            await AsyncStorage.setItem('phoneNumber', phoneNumber)

            navigation.navigate('CreateUserStep5');
        } else {
            Alert.alert('Por favor, preencha todos os dados corretamente!')
        }
    }

    function isValidForm() {
        return (
            documentNumberCpf !== "" &&
            birthDate !== "" &&
            phoneNumber !== ""
        )
    }

    function handleBack() {
        navigation.navigate('CreateUserStep3')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                <View style={styles.form}>
                    <Text style={styles.information}>Só mais algumas informações...</Text>

                    <Text
                        style={[styles.label, (documentNumberCpf !== "" && documentNumberCpf.length < 14 ? styles.labelError : '')]}
                    >
                        Seu CPF *
                    </Text>
                    <TextInputMask
                        type={'cpf'}
                        value={documentNumberCpf}
                        onChangeText={setDocumentNumberCpf}
                        style={styles.input}
                    />
                    {documentNumberCpf !== "" && documentNumberCpf.length < 14 && (
                        <Text style={styles.errorMessage}>
                            CPF Inválido
                        </Text>
                    )}

                    <Text
                        style={[styles.label, (birthDate !== "" && birthDate.length < 10 ? styles.labelError : '')]}
                    >
                        Seu Aniversário *
                    </Text>
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={birthDate}
                        onChangeText={setBirthDate}
                        style={styles.input}
                    />
                    {birthDate !== "" && birthDate.length < 10 && (
                        <Text style={styles.errorMessage}>
                            Data Inválido
                        </Text>
                    )}

                    <Text
                        style={[styles.label, (phoneNumber !== "" && phoneNumber.length < 15 ? styles.labelError : '')]}
                    >
                        Seu Celular *
                    </Text>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        style={styles.input}
                    />
                    {phoneNumber !== "" && phoneNumber.length < 15 && (
                        <Text style={styles.errorMessage}>
                            Número inválido
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