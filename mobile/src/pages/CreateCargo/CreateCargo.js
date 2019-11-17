import React, { useState, useEffect } from 'react'
import { AsyncStorage, Alert, Picker, SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import logo from '../../assets/logo.png'

export default function CreateCargo({ navigation }) {
    const [user, setUser] = useState('')
    const [cargoType, setCargoType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [extimatedDate, setExtimatedDate] = useState('')
    const [homeAddress, setHomeAddress] = useState('')
    const [finalAddress, setFinalAddress] = useState('')
    const [obs, setObs] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(storagedUser => {
            if (storagedUser)
                setUser(storagedUser)
        })
    }, [])

    async function handleSubmit() {
        if (isValidForm()) {
            let model = {
                cargoType,
                startDate,
                extimatedDate,
                homeAddress,
                finalAddress,
                obs,
                _id: user
            }

            console.log("TCL: handleSubmit -> model", model)

            // await api.post('/user', model)
            //     .then(({ resp }) => {
            //         console.log("TCL: handleSubmit -> resp", resp)
            //     }).catch(error => {
            //         console.log("TCL: handleSubmit -> error", error)
            //     })

            navigation.navigate('Login')
        } else {
            Alert.alert('Por favor, preencha todos os dados corretamente!')
        }
    }

    function isValid(item) {
        switch (item) {
            case 'startDate':
                return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(startDate)
                break;
            case 'extimatedDate':
                return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(extimatedDate)
                break;
            default:
                return false;
                break;
        }
    }

    function isValidForm() {
        return (
            cargoType !== "" &&
            (startDate !== "" && isValid('startDate')) &&
            (extimatedDate !== "" && isValid('extimatedDate')) &&
            homeAddress !== "" &&
            (finalAddress !== "")
        )
    }

    function handleBack() {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.img} />

            <View style={styles.form}>
                <Text style={styles.information}>Cadastre as informações abaixo</Text>

                <Text
                    style={[styles.label, (cargoType !== "" && !isValid('cargoType') ? styles.labelError : '')]}
                >
                    Tipo da carga *
                </Text>
                <Picker
                    selectedValue={cargoType}
                    onValueChange={(itemValue, itemIndex) => setCargoType(itemValue)}>
                    <Picker.Item label="Moveis" value="Movel" />
                    <Picker.Item label="Peças" value="'Peça'" />
                    <Picker.Item label="Outros" value="Outros" />
                </Picker>

                <Text
                    style={[styles.label, (startDate !== "" && !isValid('startDate') ? styles.labelError : '')]}
                >
                    Data retirada *
                </Text>
                <TextInputMask
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={startDate}
                    placeholder={`${new Date().getDate() + 10}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}
                    onChangeText={setStartDate}
                    style={[styles.input, (startDate !== "" && !isValid('startDate') ? styles.inputError : '')]}
                />
                {startDate !== "" && !isValid('startDate') && (
                    <Text style={styles.errorMessage}>
                        Data Inválida
                    </Text>
                )}

                <Text
                    style={[styles.label, (extimatedDate !== "" && !isValid('extimatedDate') ? styles.labelError : '')]}
                >
                    Data Previsão de Entrega *
                </Text>
                <TextInputMask
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={extimatedDate}
                    placeholder={`${new Date().getDate() + 13}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}
                    onChangeText={setExtimatedDate}
                    style={[styles.input, (extimatedDate !== "" && !isValid('extimatedDate') ? styles.inputError : '')]}
                />
                {extimatedDate !== "" && !isValid('extimatedDate') && (
                    <Text style={styles.errorMessage}>
                        Data Inválida
                    </Text>
                )}

                <Text
                    style={[styles.label, (homeAddress !== "" && !isValid('homeAddress') ? styles.labelError : '')]}
                >
                    Endereço de saída *
                </Text>
                <TextInput
                    style={[styles.input, (homeAddress !== "" ? styles.inputError : '')]}
                    placeholder="Ex: Rua Antônio de souza"
                    value={homeAddress}
                    onChangeText={setHomeAddress}
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                {homeAddress !== "" && (
                    <Text style={styles.errorMessage}>
                        Campo inválido
                    </Text>
                )}

                <Text
                    style={[styles.label, (finalAddress !== "" ? styles.labelError : '')]}
                >
                    Endereço de destino *
                </Text>
                <TextInput
                    style={[styles.input, (finalAddress !== "" ? styles.inputError : '')]}
                    placeholder="Ex: Av. Lisboa"
                    value={finalAddress}
                    onChangeText={setFinalAddress}
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                {finalAddress !== "" && !isValid('finalAddress') && (
                    <Text style={styles.errorMessage}>
                        Campo inválido
                    </Text>
                )}

                <Text style={styles.label}                >
                    Observações
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: O produto é frágil"
                    value={obs}
                    onChangeText={setObs}
                    autoCapitalize="words"
                    multiline={true}
                    autoCorrect={false}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleBack}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#FFF'
    },

    img: {
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    },

    errorMessage: {
        marginTop: -10,
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
        marginBottom: 10,
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