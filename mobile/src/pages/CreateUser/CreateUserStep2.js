import React, { useState, useEffect } from 'react'
import { AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import api from '../../services/api'

import background from '../../assets/background.jpg'

export default function CreateUserStep2({ navigation }) {
    const [firstName, setFirstName] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('firstName').then(storagedFirstName => {
            if (storagedFirstName)
                setFirstName(storagedFirstName)
        })
    }, [])

    async function nextStep() {
        await AsyncStorage.setItem('firstName', firstName)

        // navigation.navigate('CreateUserStep3')
    }

    function handleBack() {
        navigation.navigate('CreateUser')
    }

    return (
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.name}>{firstName},
                        <Text style={styles.information}> por favor prencha os dados a seguir</Text>
                    </Text>

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

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8
    },

    information: {
        fontSize: 18,
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