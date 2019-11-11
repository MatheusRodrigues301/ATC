import React, {useState, useEffect} from 'react'
import {AsyncStorage, ImageBackground, View, Image, KeyboardAvoidingView, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native'

// import api from '../services/api'

import logo from '../assets/logo.png'
import background from '../assets/background.jpg'

export default function Login( {navigation} ){
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user)
            navigation.navigate('List')
        })
    },[])


    async function handleSubmit( ){
        // const response = await api.post('/sessions', {
        //     email
        // })

        // const { _id } = response.data
        
        // await AsyncStorage.setItem('user', _id)
        // await AsyncStorage.setItem('techs', techs)

        // navigation.navigate('List')
    }


    return (
        <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
            <KeyboardAvoidingView  behavior="padding" style={styles.container}> 
                <Image source={logo} />

                <View style={styles.form}>
                    <Text style={styles.label}>Seu Email *</Text>
                    <TextInput style={styles.input} placeholder="Seu e-mail" value={email} onChangeText={setEmail} placeholderTextColor="#FFF" keyboardType="email-address" autoCapitalize="none" autoCorrect={false}/>
            
                    <Text style={styles.label}>Sua Senha *</Text>
                    <TextInput style={styles.input} placeholder="Sua senha" value={password} secureTextEntry={true} onChangeText={setPassword} placeholderTextColor="#FFF" autoCapitalize="none" autoCorrect={false}/>

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}> 
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
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

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})