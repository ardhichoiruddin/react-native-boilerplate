import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const Slide = props => {
    return (
        <View style={[styles.image, props.style]}/>
    )
}

export default Slide

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height
    }
})