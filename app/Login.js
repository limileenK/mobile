import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Left, Right, Title, Container, Body, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Login = () => {
    return(
            <View style = { styles.container } >
                <Container style={styles.circle} />
                <Header barStyle="light-content" transparent>
                    <Left>
                        <Icon name="chevron-left" />
                    </Left>
                    <Body>
                        <Text>เข้าสู่ระบบ</Text>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={{ marginHorizontal: 32 }}>
                        <Text style={styles.header}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder=""
                            onChangeText={(text) => {
                                this.setState({
                                    name: text
                                });
                            }}
                            value={this.state.name}
                        />
                        <Text style={styles.header}>Password</Text>
                        <TextInput
                            style={styles.input}
                        />
                        <View style={{ alignItems: "flex-end", marginTop: 40 }}>
                            <TouchableOpacity
                                style={styles.continue}
                                onPress={() => {
                                    Actions.message({
                                        name: this.state.name
                                    })
                                }} >
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