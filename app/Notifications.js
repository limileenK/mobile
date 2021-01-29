import React from 'react'
import { View, Image, Text } from 'react-native'

const Notifications = (props) => {
    let textColor = props.focused ? '#333333' : '#999999'
    const settingImageFocused = require('./icon/notif.png')
    const settingImageUnfocused = require('./icon/notiu.png')
    let settingImage = props.focused ? settingImageFocused : settingImageUnfocused
    let borderColor = props.focused ? '#333333' : '#FFFFFF'
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopColor: borderColor, borderTopWidth: 4, padding: 20 }}>
            <Image source={settingImage} style={{ width: 40, height: 40 }} />
            <Text style={{ color: textColor }}>Notifications</Text>
        </View>
    );
}

module.exports = Notifications;