import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right,
    Button,
    ListItem,
    List,
} from 'native-base';
import { TextExtraLight, TextRegular } from '../font'
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '50%'// is 50% of container width
    }
})



const TabTwo = ({ id }) => {
    const [dataCate, setDataCate] = useState([]);
    useEffect(() => {
        fetch("http://192.168.43.219/testCodeif4/public/cate/" + id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDataCate(data);
            });
    }, [id])
    return (

        <Content style={{ padding: 5 }}>
            <View style={styles.container}>
                <FlatList
                    data={dataCate}
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
            </View>
        </Content>

    );

}
export default TabTwo