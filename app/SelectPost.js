import React from 'react'
import Carousel from './compPost/Carousel'
import Post from './compPost/Post'

import { ScrollView } from 'react-native'
import { Content, Text } from 'native-base'
const SelectPost = ({ selectpost }) => {
    return (

        <Content>
            <ScrollView
                style={{ flex: 1, color: 'red' }}
                contentContainerStyle={{ flexGlow: 1 }}
                scrollEnabled={true}
            >
                <Carousel id={selectpost.aw_id}  />
                <Post id={selectpost.aw_id} />
            </ScrollView>
        </Content>
    )
}

export default SelectPost
