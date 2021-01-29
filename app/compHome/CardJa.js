import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Left,
    Body,
    Right,
    Row,
    Col,
    Grid
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextTitle, TextThin, TextExtraLight, TextLight, TextRegular, TextMedium, TextSemiBold, TextBold, TextExtraBold, TextBlack } from '../font'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '50%' // is 50% of container width
    }
})

export default class CardImageExample extends Component {
    render() {
        return (
            <Content style={{ padding: 10 }}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail style={{ width: 30, height: 30 }} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX/004wQmn///+RvtRLUl8HMWuIvdv901L/2E0iO2qaiF+Qf2L/1U7qYEVIUF9eXl7/0kj/0UE4RmDuxlD/0DyVxNv/2GU1RWDduVP/0kT/9dooOGL/4Ir/89P/+u3/1lvgvFL//fb/7b3/3oH/7sH/5Jv/+OX/3Hf/6rT/4pH/+er/5qP/8cr/56j/2m7/9uCErcSnr79AS2DEplaCdmJQaolCWHp1mrKslV1niKJcepaLtsxylq/uWTnoZlFvaV3OrlSulljNyKCmwcfizofbzI83RWgeMF9sZmWWhWBKY4LRg4Dibl/XfHSuqbjAmJ+4n6mbrQedAAAMIklEQVR4nN3daXvTuBYAYMWFSQqBkcHJrRInHmepk7RJSoFCWxiY5cKwDDP//9dcOasXyTq2ZFu6h/nCEGjeR0fSkbwIWaWHPxxMRrOpGwTdfQSBO52NJoNh+T/dQiX+2/5isJwHHnZsmxCMMToG/R0htu0QL5gvBwu/xG9RlnBxOaU2OwFjBKXa2Auml4uSvkkZwuFkvsFl0+LOkOmOysha1UJ/cNF17Dy4CNN2vIuB6oxVKvQv3aZDCun2QRzkXipFKhQO3GbBxks2ZdO9VPe1VAkXF1gJb48k03NF30yJ0J8EksmZDuKsRkqyVYFwuPQUNt8xaLZeKBhcpYWLOVbdfMcg2JVOVknheuyU0XzHwE6wrlF47pbs2xrHUkYJ4cIVVWSqjGQskavFhRelDC8coz0tPK4WFU6a5Y0vrCB4VKlwvXIq9YXhrHrVCae51g2qApNpRcJexQl6DIIGFQj9aQUzBDecee4RJ69w3a2rAbdBvLy9MadwVuEUwQ5sL0sU+oFdsy8Me5WrHs8j7DXrbsBt4FwDTg7hrN4eGI08mQoXujpk6D7ssXKhv9KnBcMgHrQzAoXnnh5d8BjYA66pYMIe0g0YbpbDxhuQ8LL6OhsSzkSVcKInkBJnaoQjnQbReNgAolg407UFw7Av5IVaA2miCoki4UhvIKC8EQgn+vbBfYj6YrZQ02kiHs6ouLBnApASM6f+LOF53V8dGjirgMsQ+trVorzAXsbuTYZwZQqQErtFhK5ey6XsIPz1Ilc403+eiAZ/WuQJexIt2G61C0WrLUPkDagc4bAp4fvl0YefC8SHLx/bMkbOop8jLD7KtNtvr6+fForrZ6+axYm80YYtlOiErUfPHhSO6w+oOJGzzmAK18WB7bP/FAdS4m+twj+a0xVZQr9bfCZsPX4qI3z6s0SeIubEzxJOJcbRlhTwwYNnzyWExIUJ5eptqSSlwjOZ4dRh3A/HEMpcnWjXK0QYIpTJ0Zjw+hk8rp+qEZK5WLiWLEePwpfP4fHywVMlQkRS42lKKLeiOLYhHffzFGwvr9UI0/N+Uii583QU5vuq7V+eqRGmt22SQrl/XgMhwn6m8EJ6UVi7MDnYxIUL2UWhBm2I7HWGcCy7caGDEAd8oexMEUb9QkR6XKErvfekQxsiPOYJ1/IbwFoIkdPjCKV7YRg6CGM9MSI8V7CHr0cbImfNFM6FTUgwaopiv4dx/bEt/Owx0Nmuars+E/618C5MQUR74lE4FAGJ9/sfJz+JorMP4SfZf0/8yZM/fhfeIEnOGUJROdP+8+SnEz3ip5P/CrZzIrcTH4S+YIe0dfamU7fsEJ03H0U7Vn5KKLja237+6fNt3bB9dG77p4L9nOMS4yAMsrth69Vpo/+6btou7vqN078EjdhNCgVTRbv5sNFo9G+u6s/Uzv1Nn36Xh4JGPMz6e6Fgd6b98rQRRr/2zth5s/kijdO32Y2I5wmhYKpovd0KG/27moW3/Z3wiyBN7bjwUrAwbD3aCRv9r/d1Al/vgI3TxyLhJCYUrSqOwkbjU22dsXN1sweKhfu6BoEmw5iw0X9XD7Hzpn/8EkLh/oIiAiVpXFhXZ7yLAAFCexQRCpe+cSGdNqrvjPdfo0CAcJemG6Ev+GxKWH1n7Fx9in8BQJZu9xU3woFwZZgSNvq3VRI77/qN3EL78iAUX4xJC6ut4e6SQFAbzg9CT/RZlrDCGu7+JgWECFFzLxyKty9YQhqV1HCdK9aPhgg3mxmhEHCrOkfYr2JBdZtuQKCQzHZCwDYpR1hFZ3zNBIKEmz03BOqGXGGjX+600WF1QbAQoa1wAdgm5QrLreH2S6WiQrLeCIUlW7awzBqO3QXhwnB9gWC3JmQJy1tQfeUDYcJwRkTCHRqxsJwaLrpUKixchUIfMNCIhCXUcOk6rYAQNYdUuIBcNBQJ1U8b6TqtiNA+p8IB5Mq2UBguqBQ2431WF8wjnFDhUkkbhqGshmPXaUWE5IIKQRd+QUJVNZyoC+YQ0lUwAg2lMKGqzijqgjmEqEuFkKEUKFTSGbl1WiEhspAPuoUGKBRvinc2/2X8+RuQDyx0fLQAXdsGC7M7Y+fFt+/f//6RYcyo04oJ1wg0WeQQ0hqOD/zx5P2TJ0/e/8MlcpZKxYX2JYI9JZpDyF9QdX6EPj5RUKcVEpIRgr2xJI+Qu6B6sQNS4r8sIH+pJCGcIdCEn1PIWVD9/eQYDCBoksgtvEBT0G1COYXMBdWLCPD9j9QfC+u0QkI8R7B72fIKG/1GqjMekzSdpqktbWXCMQogn8svZCyo7n+NCF/EgZA6rZAQreivkoSpztj5dmzE7/E/ytcFcwm79FdZwnQNd2zEWBOKl0q6ChvJBdUhT19E/jdkqSQh9BCo8C4sTGTq/ff3NH6NAuF1WjFhs2Rh6vLNv9++/ROZSDpXRTI0jxCVLQybMdYbO53j7zpFhhj9hI1+/+7qhBGd+9tGYaBWwtD49d1VJ96S9+9eS/jyCMsdS4/Ixs3du6v7TZLeX727u5Hi5RB6VQk3ykhI/2NwYXk1TbkBn/FLq0tLDrgQ9pCFucIAiZ9BMFqI3XLW+BUEVDgtZZ+mioDuYixL2GurJuB7bcr3SysK+H4p7HkuY4VOT/V1i8oCft1C6bWnCgMobFMh6CUKxgq7Sq8BVxo5rgGru45faQCv40+pEHLTl7FCe0SF5//PbWivVd0TVX0AR5rwnijQYGqqsLu5cw+yfjJUiN2NEFJ7Gyoko40QMtSYKuxt7/MGvOfSUOHuPm/I+zDMFB7u1Qcs880UkuVOCFgimincPM+9ee5J3BHNFGK5Z9dqDsiza+5BKC6+jRRun+bePkMqHEyNFJLh8Tlg4XxhonD3LqWtUFi4mSjcvd5kKxwKPmykEC+i71QQpamBwvCJoIhQlKYGCsks/m4TwYxooNAexoWCZbB5wsMLzfZCwRsFzRMeDp85vCcq+54M84SelRRmHxZgnJAsU8Lst38YJ8TDlDB7gWGaMPIy4aMwc0PKOOGaIcysawwTRl9gGhFmTRiGCaPnlEXfQZvxrKVZwn1JmhJmHGxhljB21FzsXdD8nmiUMP5C75iQf4yVUcL4iTrxd7Jze6JJwlgvTAp7vNLNJGHiUKTE2QhzTp4aJMSJY/QSQt6+okFCe5gp5C0xzBGmjglMnTPDPq/LHGHq3K6UkH03pjFCO3WmVfq8J+ZgY4owOcwwhcxXCpsitNNnyzGErIOcD29K1iZOHzGEu5eyioSsU2TbHx/WTUrE6cv0+7wTJ8zwhaz7wNp1i5LxkHVQIusoUuYZlozxtPWbXo3IStL9+60BQmvKIL7SqSee/pU+dpZxbh5fyJj32+jLZ12Mp58fp3MUe2wKR8h4W2S7dfb4+qEOcf3qjHE4MuEcsM4705l180LRs5qVB+vwZ3YnzBBaF2adyx05dgUqtAKTzlZPrOthQt9TccBVNYER6yRgkVDm9PHK45zPyBBKnSBfaaSPVwUKmTW4huHwhlGx0JqZQHSS+xZ5hDLHyFcVnEPjoUL9p0WbOxEChdZU70S1Wcep5xOy1hn6hBgIEOqcqMIUhQmtpa6J6ggGGbBQ10lDME3kEVqXOpaoJHOizym0ek3djBhllWr5hdbQ06tIxVnFdiGh5Qc6DalkxV8uFRVqNWtAZokCQjre6NEZMXCMyS+0zrXojMTj7KopEGpRwtnsjV9VQuuyWW8zYpQnQ4sIreG4zgLHCVgXX9QKLWtC6mpGzLo+WILQ8t1aeiO2x+BJUFJoWQOveqPtpW5CKFFIV1QVpyq2L4o0oIQwTNXq5n+aoLlHGGkhXW8EFRmxvQKuIxQLaXcMnAqMzqpYB1QhpMZuyUbsdKV80sIwV0scczCRyU9FQstazzEppSEJdnviH1+BkFZyS095smLHWxYeP6OhREhjMHYUNiQmzlg6PXehSkgnyNkKK5k+aM6vZgWnd0aoE9JYzAIiicS2Hcygm0ygUCqkMZy4uGi+0twk7khJ54uEamEYvWWA8rYlpnPOaqlg6ExFGcIweiO3i2xb3JoYE9tud8ezMnRhlCUMY7geTcdd7FAoSW7TYSqjNAd3x9PRWnVmRqNM4TZ8vzeZLafjoHt4XNzrdgN3upxNekN1YyYv/gfrz8L0+6Gp6AAAAABJRU5ErkJggg==' }} />
                                    <Body>
                                        <TextRegular>SE</TextRegular>
                                        <TextExtraLight>NPRU</TextExtraLight>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('./img/2.jpg')} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left />
                                <Body />
                                <Right>
                                    <Text>5,000</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={styles.item}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail style={{ width: 30, height: 30 }} source={{ uri: 'data:image/png;base64,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' }} />
                                    <Body>
                                        <TextRegular>อาจารย์แนบ</TextRegular>
                                        <TextExtraLight>React</TextExtraLight>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('./img/react.png')} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left />
                                <Body />
                                <Right>
                                    <Text>5,000</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={styles.item}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail style={{ width: 30, height: 30 }} source={{ uri: 'data:image/png;base64,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' }} />
                                    <Body>
                                        <TextRegular>อาจารย์นุ้ย</TextRegular>
                                        <TextExtraLight>HTML/CSS/J</TextExtraLight>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('./img/html.png')} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left />
                                <Body />
                                <Right>
                                    <Text>5,000</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={styles.item}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail style={{ width: 30, height: 30 }} source={{ uri: 'data:image/png;base64,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' }} />
                                    <Body>
                                        <TextRegular>อาจารย์อุษณีย์</TextRegular>
                                        <TextExtraLight>Database</TextExtraLight>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('./img/database.jpg')} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left />
                                <Body />
                                <Right>
                                    <Text>5,000</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={styles.item}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail style={{ width: 30, height: 30 }} source={{ uri: 'data:image/png;base64,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' }} />
                                    <Body>
                                        <TextRegular>อาจารย์นฤพล</TextRegular>
                                        <TextExtraLight>Github</TextExtraLight>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('./img/git.png')} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left />
                                <Body />
                                <Right>
                                    <Text>5,000</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={styles.item}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail style={{ width: 30, height: 30 }} source={{ uri: 'data:image/png;base64,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' }} />
                                    <Body>
                                        <TextRegular>อาจารย์โก๋</TextRegular>
                                        <TextExtraLight>C#</TextExtraLight>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('./img/c.png')} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left />
                                <Body />
                                <Right>
                                    <Text>5,000</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </Content>
        );
    }
}