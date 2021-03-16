import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Left, Right, Title, Container, Body, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Users from './User';
const Login = (props) => {
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const loginHandle = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(foundUser);
    }
    return (
        <View style={styles.container} >
            <Container style={styles.circle} />
            <Header barStyle="light-content" transparent androidStatusBarColor="#ff5722" style={{ backgroundColor: '#ff5722' }}>
                <Left >
                    <Button onPress={Actions.profile} transparent>
                        <Icon name="chevron-left" style={{ color: '#ffffff' }} />
                    </Button>

                </Left>
                <Body>
                    <Text style={{ color: '#ffffff' }}>เข้าสู่ระบบ</Text>
                </Body>
                <Right />
            </Header>
            <Content>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="username"
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff"
                        keyboardType="email_addres"
                        onSubmitEditing={() => password.focus()}
                    />







                    <Text style={styles.header}>Password</Text>
                    <TextInput
                        style={styles.input}

                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#002f6c"
                        ref={(input) => password = input}
                    />





                    <View style={{ alignItems: "flex-end", marginTop: 40 }}>







                        <TouchableOpacity
                            style={styles.continue}
                            onPress={() => {loginHandle( data.username, data.password )}}
                >
                            <Icon name="chevron-right" color="white"></Icon>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Content>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "500",
        fontSize: 22,
        color: "#514E5A",
        marginTop: 30
    },
    input: {
        marginTop: 15,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "300"
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
})

module.exports = Login