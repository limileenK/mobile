import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import { Switch, ListItem, Card, CardItem, Container, Header, Content, Row, Col, Title, Left, Right, Body, Button } from 'native-base'
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from './font'

const styles = StyleSheet.create({
    profile: {
        width: 150,
        height: 150,
        borderRadius: 150,
        alignItems: 'center',
        borderWidth: 1
    }
})

const Profile = () => {
    return (
        <Container>
            <Header androidStatusBarColor="#F57C00" style={{ backgroundColor: '#F57C00' }}>
                <Body>
                    <TextTitle>โปรไฟล์</TextTitle>
                </Body>
            </Header>
            <Content>
                <Col>
                    <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./icon/softbg.jpg')}>
                        <Body style={{ padding: 25, flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                            <Col style={{ alignItems: 'center' }}>
                                <Image style={styles.profile} source={{ uri: 'https://iconarchive.com/download/i87177/graphicloads/colorful-long-shadow/User-group.ico' }} />
                            </Col>
                            <Col>
                                <Button block style={{ width: '60%', margin: 1, alignSelf: 'center' }} info>
                                    <TextExtraLight>เข้าสู่ระบบ</TextExtraLight>
                                </Button>
                                <Button block style={{ width: '60%', margin: 1, alignSelf: 'center' }}>
                                    <TextExtraLight>ลงทะเบียน</TextExtraLight>
                                </Button>
                            </Col>
                        </Body>
                    </ImageBackground>
                </Col>
                <Col>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="random" color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Status</Text>
                        </Body>
                        <Right>
                            <Switch />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="user" color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>บัญชี</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="question-circle" color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>เกี่ยวกับเรา</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#D50000" }}>
                                <Icon active name="sign-out" color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>ออกจากระบบ</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                        </Right>
                    </ListItem>
                </Col>
            </Content>
        </Container>
    );
}

module.exports = Profile;