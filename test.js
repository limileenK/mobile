import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Platform, KeyboardAvoidingView,SafeAreaView } from 'react-native'
import { Container, Header, Body, Button, Left, Content } from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat'
import { Actions } from 'react-native-router-flux';
import Fire from '../../Fire'

module.exports = class Example extends React.Component {
  state = {
    messages: []
  }

  get user() {
    return {
      _id: Fire.uid,
      name: this.props.navigation.state.params.name
    }
  }

  componentDidMount() {
    Fire.get(message => this.setState(previous => ({
      messages: GiftedChat.append(previous.messages, message)
    }))
    );
  }

  componentWillUnmount() {
    Fire.off();
  }

  render() {
    const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
    if (Platformos === 'android') {
      return ( 
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
          {chat}
        </KeyboardAvoidingView>
      )
    }
    return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>;
}
}