import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'

const RNBasic = () => {
    const width = useSharedValue(100);
    const handlep = () => {
        width.value = withTiming(width.value + 50, {
            duration: 6000,

        })
    }
    return (
        <View>
            <Animated.View style={{ width: 50, height: 50, backgroundColor: "red" }}></Animated.View>
            <Button title="Change Width" onPress={handlep} />
        </View>
    )
}

export default RNBasic

const styles = StyleSheet.create({})