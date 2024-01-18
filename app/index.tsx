
import React from 'react'
import { Text, View } from 'react-native';

type Props = {};
export default function index({ }: Props) {
    return (
        <View>
            <Text>{process.env.EXPO_PUBLIC_API_URL}</Text>
            <Text>
                {process.env.EXPO_PUBLIC_ENV}
            </Text>
        </View>
    )
}