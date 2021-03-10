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
    Right, Button, Title, List, ListItem, Header, Icon
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
        width: '100%'
    },

    btpack: {
        backgroundColor: '#F57C00'
    }
})

const Post = ({ id }) => {
    const [showdetail, setShowdetail] = useState([]);

    useEffect(() => {
        fetch("http://192.168.43.219/testCodeif4/public/detailpost/" + id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setShowdetail(data);
            });
    }, []);


    return (

        <Content style={{ padding: 10 }}>

            {showdetail.map((detail) => {
                return (
                    <View style={styles.container}>
                        <View style={styles.item}>
                            <Card transparent>
                                <CardItem header style={styles.work}>
                                    <Body>
                                        <Text style={{ color: '#000000' }}>
                                            {detail.aw_name}
                                        </Text >
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {detail.aw_detail}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.item}>
                            <Card>
                                <CardItem header style={styles.work}>
                                    <Title style={{ color: '#000000' }}>แพ็คเกจ 1</Title>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {detail.pk_detail}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <Button full style={styles.btpack} onPress={Actions.room}>
                                    <Text>ราคา {detail.pk_price} บาท</Text>
                                </Button>
                            </Card>
                        </View>
                        <View style={styles.item}>

                            <Body>
                                <Text>{detail.std_fname}</Text>
                            </Body>

                        </View>
                    </View>
                )

            })}
        </Content>
    );
}
export default Post


