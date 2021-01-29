import React from 'react'
import { Text, Title } from 'native-base'

export const TextTitle = props => <Title style={{ fontFamily: 'Kanit-Regular',left: 15 }}>{props.children}</Title>
export const TextThin = props => <Text style={{ fontFamily: 'Kanit-Thin',fontSize:12 }}>{props.children}</Text>
export const TextExtraLight = props => <Text style={{ fontFamily: 'Kanit-ExtraLight',fontSize:12 }}>{props.children}</Text>
export const TextLight = props => <Text style={{ fontFamily: 'Kanit-Light',fontSize:12 }}>{props.children}</Text>
export const TextRegular = props => <Text style={{ fontFamily: 'Kanit-Regular',fontSize:15 }}>{props.children}</Text>
export const TextMedium = props => <Text style={{ fontFamily: 'Kanit-Medium' }}>{props.children}</Text>
export const TextSemiBold = props => <Text style={{ fontFamily: 'Kanit-SemiBold' }}>{props.children}</Text>
export const TextBold = props => <Text style={{ fontFamily: 'Kanit-Bold' }}>{props.children}</Text>
export const TextExtraBold = props => <Text style={{ fontFamily: 'Kanit-ExtraBold' }}>{props.children}</Text>
export const TextBlack = props => <Text style={{ fontFamily: 'Kanit-Black' }}>{props.children}</Text>