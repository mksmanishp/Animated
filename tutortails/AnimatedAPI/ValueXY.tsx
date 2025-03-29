import { StyleSheet, Text, View, Animated, useAnimatedValue } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// VCF
const ValueXY = () => {
    const post = useAnimatedValue(0, {
        useNativeDriver: false,
    })

    const xyValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

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

    const moveBox = () => {
        Animated.timing(xyValue, {
            toValue: { x: 50, y: 200 },
            duration: 5000,
            useNativeDriver: true,
        }).start(() => {
        })
    }

    useEffect(() => {
        startAnimation()
        moveBox()
    }, [])

    return (
        <View >
            <Animated.View style={[styles.box, { marginLeft: post }]} />
            {/* <Animated.View style={[styles.box1, xyValue.getLayout()]} /> */}
            <Animated.View
                style={[styles.box1, { transform: xyValue.getTranslateTransform() }]}
            />
        </View>
    )
}

export default ValueXY

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow'
    },
    box1: {
        height: 50,
        width: 50,
        backgroundColor: 'orange',
        marginTop: 10
    }
})