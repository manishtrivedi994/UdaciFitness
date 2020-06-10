import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function UdaciSteppers({ max, unit, step, value, onIncremenent, onDecremenent }) {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={onDecremenent}>
                    <FontAwesome name='minus' size={30} color={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onIncremenent}>
                    <FontAwesome name='plus' size={30} color={'black'}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}
