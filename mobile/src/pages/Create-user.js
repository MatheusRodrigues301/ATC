import React, {useState, useEffect} from 'react'
import {AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native'

import api from '../services/api'

import background from '../assets/background.jpg'

export default function CreateUser({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        
    },[])

    function handleBack(){
        navigation.navigate('Login')
    }

    return (
        <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.label}>Seu Email *</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Seu e-mail" 
                        value={email} 
                        onChangeText={setEmail} 
                        placeholderTextColor="#FFF" 
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
                        placeholderTextColor="#FFF" 
                        autoCapitalize="none" 
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleBack}> 
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
)}

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