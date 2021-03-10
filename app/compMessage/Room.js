import React, { useState, useCallback, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native'
import { Container, Header, Body, Button, Left, Right, Content } from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat'
import { Actions } from 'react-native-router-flux';
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from '../font'

const Room = ({ item }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'ฉันคือ ' + item.emm_user_id,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: item.image,
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <>
      <Container>
        <Header androidStatusBarColor="#ff5722" style={{ backgroundColor: '#ff5722' }}>
          <Left>
            <Button transparent style={{ width: 30 }} onPress={Actions.message}>
              <Icon name="chevron-left" color="white" />
            </Button>
          </Left>
          <Body >
            <Text style={{ color: 'white',fontFamily:'Kanit-Regular' }}>{item.emm_user_id}</Text>
          </Body>
          <Right />
        </Header>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </Container>
    </>
  )
}

module.exports = Room