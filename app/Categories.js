import React, { useState, useEffect } from 'react'
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title } from 'native-base';
import Tab1 from './compCategories/tabOne';
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from './font'

const Categories = () => {

    const [dataCate, setDataCate] = useState([]);

    useEffect(() => {
        fetch("http://192.168.43.46/flash_work/index.php/usercontrollers/showcate")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDataCate(data);
            });
    }, [])

    return (
        <Container>
            <Header androidStatusBarColor="#F57C00" hasTabs style={{ backgroundColor: '#F57C00' }}>
                <Body>
                    <TextTitle>หมวดหมู่</TextTitle>
                </Body>
            </Header>
            <Tabs renderTabBar={() => <ScrollableTab />}>
                {dataCate.map((data) => {
                    return (
                        <Tab key={data.main_cate_id} heading={data.main_cate_name} tabStyle={{ backgroundColor: '#FFFFFF' }} textStyle={{ color: '#000000', fontFamily: 'Kanit-Regular' }} activeTabStyle={{ backgroundColor: '#FFFFFF' }} activeTextStyle={{ color: '#F57C00', fontFamily: 'Kanit-Regular' }}>
                            <Tab1 />
                        </Tab>
                    )
                })}
            </Tabs>
        </Container>
    )
}

module.exports = Categories;