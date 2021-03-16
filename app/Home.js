import React, { useState, useEffect } from 'react';
import {
    Card,
    Col,
    Item,
    Input,
    Container,
    Header,
    Content,
    Button,
    Text,
    CardItem,
    Left,
    Right,
    Body
} from 'native-base';
import { observer } from 'mobx-react'
import { Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from './compHome/Carousel';
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from './font'
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Home = (props) => {
    const [popfree, setPopfree] = useState([]);
    useEffect(() => {
        fetch("http://192.168.43.219/testCodeif4/public/show_work1")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPopfree(data);
            });
    }, [popfree])
    const [work, setWork] = useState([]);
    useEffect(() => {
        fetch("http://192.168.43.219/testCodeif4/public/work")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setWork(data);
            });
    }, [work])

    return (
        <Container style={{ fontFamily: 'Kanit-Regular' }}>
            <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                <Col style={styles.boxSearch}>
                    <Item style={styles.search} >
                        <Icon name="search" />
                        <Input placeholder="ค้นหางาน" style={{ fontFamily: 'Kanit-Light' }} />
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

                    <Content style={{ padding: 5 }}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text style={{ color: '#ff5722', fontSize: 20 }}>
                                        ฟรีแลนซ์ยอดนิยม
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={styles.container}>
                            {popfree.map((selectpost) => {
                                return (
                                    <View style={styles.item}>
                                        <TouchableOpacity onPress={() => Actions.selectpost({ selectpost })} key={selectpost.aw_id}>
                                            <Card >

                                                <CardItem cardBody>
                                                    <Image source={{ uri: selectpost.w_img_name }} style={{ height: 150, width: null, flex: 1, margin: 6 }} />
                                                </CardItem>
                                                <CardItem >
                                                    <Text style={{
                                                        lineHeight: 20,
                                                        height: 40,
                                                        overflow: 'hidden'
                                                    }}>{selectpost.aw_name}</Text>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left>
                                                        <Text style={{ fontSize: 15, fontStyle: 'normal' }}>เริ่มต้น</Text>
                                                    </Left>
                                                    <Right >
                                                        <Text style={{ color: '#ff5722', fontSize: 20 }}>{selectpost.pk_price} </Text>

                                                    </Right>

                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text style={{ color: '#ff5722', fontSize: 20 }}>
                                        งานนี้เพื่อคูณ
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={styles.container}>
                            {work.map((sel) => {
                                return (
                                    <View style={styles.item}>
                                        <TouchableOpacity onPress={() => Actions.selectpost({ sel })} key={sel.aw_id}>
                                            <Card >

                                                <CardItem cardBody>
                                                    <Image source={{ uri: sel.w_img_name }} style={{ height: 150, width: null, flex: 1, margin: 6 }} />
                                                </CardItem>
                                                <CardItem >
                                                    <Text style={{
                                                        lineHeight: 20,
                                                        height: 40,
                                                        overflow: 'hidden'
                                                    }}>{sel.aw_name}</Text>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left>
                                                        <Text style={{ fontSize: 15, fontStyle: 'normal' }}>เริ่มต้น</Text>
                                                    </Left>
                                                    <Right >
                                                        <Text style={{ color: '#ff5722', fontSize: 20 }}>{sel.pk_price} </Text>

                                                    </Right>

                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </Content>
                </ScrollView>
            </Content>
        </Container>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        padding: 5,
        width: '50%'// is 50% of container width
    },
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