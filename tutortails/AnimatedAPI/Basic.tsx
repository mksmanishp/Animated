import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// VCF
const Basic = () => {
    const post = useRef(new Animated.Value(0)).current

    const startAnimation = () => {
        Animated.timing(post, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(post, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false,
            }).start()
        })
    }

    useEffect(() => {
        startAnimation()
    }, [])

    return (
        <View >
            <Animated.View style={[styles.box, { marginLeft: post }]} />
        </View>
    )
}

export default Basic

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow'
    }
})