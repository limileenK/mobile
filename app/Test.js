
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

import { Actions } from 'react-native-router-flux';

const LoginV2 = () => {

    const [data, setData] = useState()

    const saveData = async () => {
        const { email, password } = useState();

        //save data with asyncstorage
        let loginDetails = {
            email: email,
            password: password
        }

        if (this.props.type !== 'Login') {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
        }
        else if (this.props.type == 'Login') {
            try {
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                if (ld.email != null && ld.password != null) {
                    if (ld.email == email && ld.password == password) {
                        alert('Go in!');
                    }
                    else {
                        alert('Email and Password does not exist!');
                    }
                }

            } catch (error) {
                alert(error);
            }
        }
    }

    const showData = async () => {
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
                onChangeText={(email) =>setData({ email })}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Email"
                placeholderTextColor="#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()} />

            <TextInput style={styles.inputBox}
                onChangeText={(password) =>setData({ password })}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#002f6c"
                ref={(input) => this.password = input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={saveData}>000</Text>
            </TouchableOpacity>
        </View>

    )
}
export default LoginV2

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});