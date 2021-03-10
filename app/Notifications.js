import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native'
import { Fab, Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base'
import { TextTitle } from './font'

const Message = (props) => {
    const [status, setStatus] = useState(false)
    const [roomInfo, setRoomInfo] = useState([
        { id: '1',name: 'userMilk' ,image: 'https://www.akerufeed.com/wp-content/uploads/2018/06/ae1d9f8516ff827b0cc196709b680de5.jpg' },
        { id: '2',name: 'userMilk' ,image: 'https://www.akerufeed.com/wp-content/uploads/2018/06/ae1d9f8516ff827b0cc196709b680de5.jpg' },
        { id: '3',name: 'userMilk' ,image: 'https://www.akerufeed.com/wp-content/uploads/2018/06/ae1d9f8516ff827b0cc196709b680de5.jpg' },
    
    ])
    return (
        <Container>
            <Header androidStatusBarColor="#ff5722" style={{ backgroundColor: '#ff5722' }}>
                <Body>
                    <TextTitle style={{ left: 15 }}>แจ้งเตือน {15}</TextTitle>
                </Body>
            </Header>
            <Content>

                <FlatList
                    data={roomInfo}
                    renderItem={({ item }) => (
                        <List>
                            <ListItem key={item.id} button onPress={() => Actions.room({ item })} thumbnail>
                                <Left>
                                    <Thumbnail source={{ uri: item.image }} />
                                </Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note numberOfLines={1}>ฉันคือ {item.name}.</Text>
                                </Body>
                                <Right>
                                    <Icon type="FontAwesome" name="fire" style={{color:'red'}} />
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