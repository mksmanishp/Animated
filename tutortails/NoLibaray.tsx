import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const NoLibaray = () => {
    const [post, setPost] = useState(0)
    useEffect(() => {
        let interval: NodeJS.Timeout;
        interval = setInterval(() => {
            setPost(prevPost => (prevPost < 200) ? prevPost + 5 : 0)
        }, 50)
        return () => clearInterval(interval);
    }, [])
    return (
        <View >
            <View style={[styles.box, { marginLeft: post }]} />
        </View>

    )
}

export default NoLibaray

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow'
    }
})