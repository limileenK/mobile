import React from 'react';
import {
    Card,
    Row,
    Col,
    Item,
    Input,
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Text
} from 'native-base';
import { observer } from 'mobx-react'
import { MyAppText, Dimensions, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from './compHome/Carousel';
import CardJa from './compHome/CardJa';
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from './font'

const Home = () => {
    return (
        <Container style={{ fontFamily: 'Kanit-Regular' }}>
            <Header androidStatusBarColor="#F57C00" searchBar rounded style={{backgroundColor:'#F57C00'}}>
                <Col style={styles.boxSearch}>
                    <Item style={styles.search} >
                        <Icon name="search" />
                        <Input placeholder="ค้นหางาน" style={{fontFamily:'Kanit-Light'}} />
                        <Icon name="users" />
                    </Item>
                    <Button transparent>
                        <TextRegular>ค้นหางาน</TextRegular>
                    </Button>
                </Col>
            </Header>
            <Content>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flexGlow: 1 }}
                    scrollEnabled={true}
                >
                    <Carousel />
                    <CardJa />
                </ScrollView>
            </Content>
        </Container>

    );
}

const styles = StyleSheet.create({
    logo: {
        zIndex: 1,
        bottom: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: 80,
        height: 80,
        borderWidth: 4,
        borderColor: "#FFFFFF",
        borderRadius: 150
    },
    search: {
        padding: 10,
        borderRadius: 50
    },
    boxSearch: {
        height: 50,
        top: 9
    },
    imageIconStyle: {
        zIndex: 1,
        bottom: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: 80,
        height: 80,
        borderWidth: 4,
        borderColor: "#FFFFFF",
        borderRadius: 150
    }
});

module.exports = observer(Home);