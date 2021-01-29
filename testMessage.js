const Message = (props) => {
    const [status, setStatus] = useState(false)
    
    Message.defaultProps = {
        name: 'name'
    }

    Message.propTypes = {
        name: React.PropTypes.string
    }
    return (
        <Container>
            <Header>
                <Body>
                    <Title style={{ left: 15 }}>แชทของ {props.name}</Title>
                </Body>
            </Header>
            <Content>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail source={{ uri: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-0/p526x296/136335336_110344827654749_8369507059174932956_o.jpg?_nc_cat=1&ccb=2&_nc_sid=1cb0a9&_nc_eui2=AeFLZ1MQPM5ArDS1osW8efWmuVSqHbVBmji5VKodtUGaONNbklVJ_FY0vrPP6e5mNWDGYLNZ0zuZaR1adnQdADMm&_nc_ohc=68SuUdMa_WMAX-oo7Ln&_nc_ht=scontent.fbkk2-6.fna&tp=6&oh=ceebedc49da8faa868ff795cf8a49ce0&oe=6024CE6E' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button onPress={Actions.room} transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail source={{ uri: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-9/138294420_2804364016445688_8072999463954397599_o.jpg?_nc_cat=1&ccb=2&_nc_sid=730e14&_nc_eui2=AeHbRUtvuX1cSnvk1xaBC5L3yt9BgY3eaYbK30GBjd5phrJHIFQ54chE2_9H1shlRMMOiuV9yi9aoLJRzlhwdVPA&_nc_ohc=iS0nw3zT_iUAX8hIP5-&_nc_ht=scontent.fbkk2-6.fna&oh=9d8f0a3b0a930364f9ee24979c7dce0b&oe=6022FD3E' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button onPress={Actions.room} transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <Fab
                active={status}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => setStatus(!status )}>
                <Icon name="user-plus" />
                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="plus" color="white" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="book" color="white" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="bookmark" color="white" />
                </Button>
            </Fab>
        </Container>
    )
}

module.exports = Message;