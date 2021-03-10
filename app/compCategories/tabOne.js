import React, { useState, useEffect } from 'react'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

const tabOne = () => {

  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("http://192.168.43.219/testCodeif4/public/maincate")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataInfo(data);
      });
  }, [])

  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body>
              {dataInfo.map((data) => {
                return (
                    <Text key={data.main_cate_id}>{data.main_cate_name}</Text>
                )
              })}
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

module.exports = tabOne