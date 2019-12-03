import React, { useState, useEffect } from 'react'
import { AsyncStorage, SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

import EstimateList from '../../components/estimatesList'
import logo from '../../assets/logo.png'

export default function MyEstimates({ navigation }) {

    useEffect(() => {

    }, [])

    function handleBack() {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => handleBack()}>
                    <Icon name="md-arrow-back" size={25} />
                </TouchableOpacity>
                <Image source={logo} style={styles.img} />
            </View>
            <EstimateList />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        alignSelf: 'center',
        backgroundColor: '#FFF'
    },

    information: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 8,
        textAlign: 'center'
    },

    top: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 30
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

    img: {
        height: 60,
        resizeMode: 'contain',
    },

    circleButton: {
        backgroundColor: '#f05a5b',
        borderRadius: 50,
        flexWrap: 'nowrap',
        position: 'absolute',
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 30
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