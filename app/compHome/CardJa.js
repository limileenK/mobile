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
import { TouchableOpacity } from 'react-native-gesture-handler';

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



const Home = () => {
    const [dataCate, setDataCate] = useState([]);

    useEffect(() => {
        fetch("http://192.168.43.219/testCodeif4/public/show_work1")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDataCate(data);
            });
    }, [])
    return (
        <Content style={{ padding: 5 }}>
            <View style={styles.container}>
                {dataCate.map((content) => {
                    return (
                        <View style={styles.item}>
                            <TouchableOpacity onPress={Actions.selectpost} key={content.aw_id}>
                            <Card>
                                
                                <CardItem cardBody>
                                    <Image source={{ uri: content.w_img_name }} style={{ height: 150, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem>
                                    <Text>{content.aw_name}</Text>
                                </CardItem>
                                <CardItem footer>
                                    <Left>
                                        <Text>5,000</Text>
                                    </Left>
                                </CardItem>
                            </Card>
                            </TouchableOpacity>
                            
                        </View>
                    )
                })}
            </View>
        </Content>
    );

}
export default Home