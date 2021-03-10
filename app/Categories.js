import React, { useState, useEffect } from 'react'
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title } from 'native-base';
import Tab1 from './compCategories/tabOne';
import Tab2 from './compCategories/tabTwo';
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from './font'

const Categories = (props) => {

    const [dataCate, setDataCate] = useState([]);

    useEffect(() => {
        fetch("http://192.168.43.219/testCodeif4/public/maincate")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDataCate(data);
            });
    }, [])

    return (
        <Container>
            <Header androidStatusBarColor="#ff5722" hasTabs style={{ backgroundColor: '#ff5722' }}>
                <Body>
                    <TextTitle>หมวดหมู่</TextTitle>
                </Body>
            </Header>
            <Tabs renderTabBar={() => <ScrollableTab />}>
                {dataCate.map((data) => {
                    return (
                        <Tab key={data.main_cate_id} heading={data.main_cate_name} tabStyle={{ backgroundColor: '#FFFFFF' }} textStyle={{ color: '#000000', fontFamily: 'Kanit-Regular' }} activeTabStyle={{ backgroundColor: '#FFFFFF' }} activeTextStyle={{ color: '#F57C00', fontFamily: 'Kanit-Regular' }}>
                            <Tab2 id={data.main_cate_id}/>
                        </Tab>
                    )
                })}
            </Tabs>
        </Container>
    )
}

module.exports = Categories;