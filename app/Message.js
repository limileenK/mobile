import React, { useState,useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native'
import { Fab, Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base'
import { TextTitle } from './font'

const Message = (props) => {
    const [status, setStatus] = useState(false)
    const [roomInfo, setRoomInfo] = useState([])
    // const [dataCate, setDataCate] = useState([]);

    useEffect(() => {
        fetch("http://192.168.43.219/testCodeif4/public/emment/614259037")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setRoomInfo(data);
            });
    }, [])
    return (
        <Container>
            <Header androidStatusBarColor="#ff5722" style={{ backgroundColor: '#ff5722' }}>
                <Body>
                    <TextTitle style={{ left: 15 }}>ข้อความ </TextTitle>
                </Body>
            </Header>
            <Content>

                <FlatList
                    data={roomInfo}
                    renderItem={({ item }) => (
                        <List>
                            <ListItem key={item.emm_user_id} button onPress={() => Actions.room({ item })} thumbnail>
                                <Left>
                                    <Thumbnail source={{ uri: item.w_img_name }} />
                                </Left>
                                <Body>
                                    <Text>{item.emm_user_id}</Text>
                                    <Text note numberOfLines={1}>ฉันคือ {item.emm_user_id}.</Text>
                                </Body>
                                <Right>
                                    <Button onPress={() => Actions.room({ item })} transparent>
                                        <Text>1</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        </List>
                    )}
                />
            </Content>
            <Fab
                active={status}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => setStatus(!status)}>
                <Icon name="user-plus" />
                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="plus" color="white" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="book" color="white" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="bookmark" color="white" />
                </Button>
            </Fab>
        </Container>
    )
}

module.exports = observer(Message);