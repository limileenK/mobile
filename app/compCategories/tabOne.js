import React, { useState, useEffect } from 'react'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

const tabOne = () => {

  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("http://192.168.43.46:80/projectalumni/index.php/alumni/alumnilist")
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
                    <Text key={data.id}>{data.id}. {data.u_fname} {data.u_lname}</Text>
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