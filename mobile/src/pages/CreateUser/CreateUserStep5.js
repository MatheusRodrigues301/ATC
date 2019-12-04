import React, { useState, useEffect } from 'react'
import { Alert, AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function CreateUserStep5({ navigation }) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {

    }, [])

    async function nextStep() {
        if (isValidForm()) {
            await AsyncStorage.setItem('password', password)

            navigation.navigate('CreateUserStepEnd');
        } else {
            Alert.alert('Erro!', 'Por favor, preencha todos os dados corretamente!')
        }
    }

    function isValid(item) {
        switch (item) {
            case 'password':
                return /[A-Z]+[a-z]+[0-9]+_?/g.test(password)
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
        navigation.navigate('CreateUserStep4')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                <View style={styles.form}>
                    <Text style={styles.information}>Vamos criar uma senha</Text>

                    <Text
                        style={[styles.label, (password !== "" && !isValid('password') ? styles.labelError : '')]}
                    >
                        Sua senha *
                    </Text>
                    <TextInput
                        style={[styles.input, (password !== "" && !isValid('password') ? styles.inputError : '')]}
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        autoCompleteType="password"
                        secureTextEntry={true}
                        autoCorrect={false}
                    />
                    {password !== "" && !isValid('password') && (
                        <Text style={styles.errorMessage}>
                            Senha deve ter no minimo de 6 caracteres.
                        </Text>
                    )}

                    <Text
                        style={[styles.label, (confirmPassword !== "" && !isValid('confirmPassword') ? styles.labelError : '')]}
                    >
                        Confirme sua senha *
                    </Text>
                    <TextInput
                        style={[styles.input, (confirmPassword !== "" && !isValid('confirmPassword') ? styles.inputError : '')]}
                        placeholder="Sua senha"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        autoCapitalize="none"
                        autoCompleteType="password"
                        secureTextEntry={true}
                        autoCorrect={false}
                    />
                    {confirmPassword !== "" && !isValid('confirmPassword') && (
                        <Text style={styles.errorMessage}>
                            As senhas não coincidem
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