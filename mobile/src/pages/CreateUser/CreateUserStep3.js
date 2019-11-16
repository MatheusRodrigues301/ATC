import React, { useState, useEffect } from 'react'
import { Alert, Text, AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function CreateUserStep3({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [gender, setGender] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('firstName').then(storagedFirstName => {
            if (storagedFirstName)
                setFirstName(storagedFirstName)
        })
    }, [])

    async function nextStep() {
        if (isValidForm()) {
            await AsyncStorage.setItem('gender', gender)

            navigation.navigate('CreateUserStep4');
        } else {
            Alert.alert('Por favor, selecione seu gênero!')
        }
    }

    function isValid(item) {
        switch (item) {
            case 'gender':
                return gender !== "";
                break;
            default:
                return false;
                break;
        }
    }

    function isValidForm() {
        return (
            isValid('gender')
        )
    }

    function handleBack() {
        navigation.navigate('CreateUserStep2')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.img} />

                <View style={styles.form}>
                    <Text style={styles.information}>Qual seu gênero, {firstName}</Text>

                    <RadioGroup
                        onSelect={(index, value) => setGender(value)}
                        color="#f05a5b"
                    >
                        <RadioButton
                            value={'Masculino'}
                            color="#f05a5b"
                        >
                            <Text style={styles.label}>Masculino</Text>
                        </RadioButton>
                        <RadioButton
                            value={'Feminino'}
                            color="#f05a5b"
                        >
                            <Text style={styles.label}>Feminino</Text>
                        </RadioButton>

                        <RadioButton
                            value={'Outros'}
                            color="#f05a5b"
                            style={styles.checkBox}
                        >
                            <Text style={styles.label}>Outros</Text>
                        </RadioButton>
                    </RadioGroup>

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

    information: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 8,
        textAlign: 'center'
    },

    checkBox: {
        marginBottom: 10
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