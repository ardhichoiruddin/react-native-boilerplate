import React from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { useValue } from 'react-native-redash'

import Slide from '../components/pages/onBoarding/Slide'

const { width, height } = Dimensions.get('window')

const OnBoaringScreens = ({componentId}) => {

    Navigation.mergeOptions(componentId,{
        bottomTabs: {
            visible: false
        }
    })

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal 
                snapToInterval={width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={1}
            >
                <Slide style={{ backgroundColor: 'red' }} />
                <Slide style={{ backgroundColor: 'blue' }} />
                <Slide style={{ backgroundColor: 'green' }} />
            </ScrollView>
        </View>
    )
}

OnBoaringScreens.options = {
    topBar: {
        title: {
            text: 'On Boarding'
        }
    }
}


export default OnBoaringScreens

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
