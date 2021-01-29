import React, { Component, useState } from 'react';
import { Header, Container } from 'native-base'
import { StatusBar, MyAppText, AppRegistry, StyleSheet, Text, View, Image, Platform } from 'react-native';
import { TabBar, Router, Stack, Route, TabView, Scene, Actions, ActionConst, InteractionManager } from 'react-native-router-flux';
import { observer } from 'mobx-react'
import Home from './Home'
import Categories from './Categories'
import Message from './Message'
import Notifications from './Notifications'
import Profile from './Profile'
import Login from './Login'
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from './font'
import Room from './compMessage/Room'
import pstore from './model/personal'


const styles = StyleSheet.create({
    tabBar: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderTopColor: 'darkgrey',
        borderTopWidth: 1,
        opacity: 0.98,
        justifyContent: 'space-between',
        zIndex: 2,
        fontFamily: 'Kanit-Regular'
    },
    fontAll: {
        fontFamily: 'Kanit-Regular'
    }
});

const RecommendTab = (props) => {
    let textColor = props.focused ? '#F57C00' : '#999999'
    const recommendImageFocused = require('./icon/qualityf.png')
    const recommendImageUnfocused = require('./icon/qualityu.png')
    let recommendImage = props.focused ? recommendImageFocused : recommendImageUnfocused
    let borderColor = props.focused ? '#F57C00' : '#FFFFFF'
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopColor: borderColor, borderTopWidth: 4, padding: 20 }}>
            <Image source={recommendImage} style={{ width: 22, height: 22 }} />
            <Text style={{ fontFamily: 'Kanit-Medium', color: textColor, fontSize: 8 }}>แนะนำ</Text>
        </View >
    );
}

const CategoriesTab = (props) => {
    let textColor = props.focused ? '#F57C00' : '#999999'
    const categoriesImageFocused = require('./icon/catef.png')
    const categoriesImageUnfocused = require('./icon/cateu.png')
    let categoriesImage = props.focused ? categoriesImageFocused : categoriesImageUnfocused
    let borderColor = props.focused ? '#F57C00' : '#FFFFFF'
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopColor: borderColor, borderTopWidth: 4, padding: 20 }}>
            <Image source={categoriesImage} style={{ width: 22, height: 22 }} />
            <Text style={{ fontFamily: 'Kanit-Medium', color: textColor, fontSize: 8 }}>หมวดหมู่</Text>
        </View>
    );
}

const MessageTab = (props) => {
    let textColor = props.focused ? '#F57C00' : '#999999'
    const messageImageFocused = require('./icon/mesf.png')
    const messageImageUnfocused = require('./icon/mesu.png')
    let messageImage = props.focused ? messageImageFocused : messageImageUnfocused
    let borderColor = props.focused ? '#F57C00' : '#FFFFFF'
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopColor: borderColor, borderTopWidth: 4, padding: 20 }}>
            <Image source={messageImage} style={{ width: 22, height: 22 }} />
            <Text style={{ fontFamily: 'Kanit-Medium', color: textColor, fontSize: 8 }}>ข้อความ</Text>
        </View>
    );
}

const NotificationTab = (props) => {
    let textColor = props.focused ? '#F57C00' : '#999999'
    const notiImageFocused = require('./icon/notif.png')
    const notiImageUnfocused = require('./icon/notiu.png')
    let notiImage = props.focused ? notiImageFocused : notiImageUnfocused
    let borderColor = props.focused ? '#F57C00' : '#FFFFFF'
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopColor: borderColor, borderTopWidth: 4, padding: 20 }}>
            <Image source={notiImage} style={{ width: 22, height: 22 }} />
            <Text style={{ fontFamily: 'Kanit-Medium', color: textColor, fontSize: 8 }}>แจ้งเตือน</Text>
        </View>
    );
}

const ProfileTab = (props) => {
    let textColor = props.focused ? '#F57C00' : '#999999'
    const profileImageFocused = require('./icon/userf.png')
    const profileImageUnfocused = require('./icon/useru.png')
    let profileImage = props.focused ? profileImageFocused : profileImageUnfocused
    let borderColor = props.focused ? '#F57C00' : '#FFFFFF'
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopColor: borderColor, borderTopWidth: 4, padding: 20 }}>
            <Image source={profileImage} style={{ width: 22, height: 22 }} />
            <Text style={{ fontFamily: 'Kanit-Regular', color: textColor, fontSize: 8 }}>โปรไฟล์</Text>
        </View>
    );
}

const Main = () => {
        return (
            <Router personalstore={pstore} hideNavBar={true} wrapBy={observer} duration={200}>
                <Stack key='root' hideNavBar={true}>
                    <Scene key='Tabbar' showLabel={false} tabs={true} tabBarStyle={styles.tabBar} default='Main'>
                        <Scene key='home' component={Home} hideNavBar={true} title='Home' icon={RecommendTab} />
                        <Scene key='categories' component={Categories} hideNavBar={true} title='Categories' icon={CategoriesTab} />
                        <Scene key='message' component={Message} hideNavBar={true} title='Message' icon={MessageTab} />
                        <Scene key='notification' component={Notifications} hideNavBar={true} title='Notification' icon={NotificationTab} />
                        <Scene key='profile' initial={true} component={Profile} hideNavBar={true} title='Profile' icon={ProfileTab} />
                    </Scene>
                    <Scene key='room' component={Room} title='Room' />
                    <Scene key='login' component={Login} title='Login' />
                </Stack>
            </Router >
        )
    }

    module.exports = observer(Main)