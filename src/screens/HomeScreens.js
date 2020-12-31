import React, { useState } from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { saveToken } from '../redux/actions/token'

const HomeScreens = ({ addToken, componentId }) => {

    const [text, setText] = useState(null)

    const tokenHandler = () => {
        addToken(text)
        setText(null)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="write token"
                onChangeText={text => setText(text)}
                value={text}
            />
            <TouchableHighlight
                style={styles.button}
                onPress={tokenHandler}
                underlayColor="#d62828"
            >
                <Text style={styles.buttonText}>Save token</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button2}
                onPress={() =>{
                    Navigation.push(componentId, {
                        component:{
                            name: 'onBoarding'
                        }
                    })
                }}
                underlayColor="#457b9d"
            >
                <Text style={styles.buttonText}>To OnBoarding</Text>
            </TouchableHighlight>
        </View>
    )
}

HomeScreens.options = {
    topBar: {
        title: {
            text: 'Home'
        }
    },
    bottomTab: {
        text: 'Home'
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToken: (tk) => dispatch(saveToken(tk))
    }
}


export default connect(0, mapDispatchToProps)(HomeScreens)


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'red',
        borderColor: '#6c757d',
        padding: 10,
        borderRadius: 6
    },
    button: {
        backgroundColor: '#e63946',
        paddingVertical: 16,
        paddingHorizontal: 14,
        borderRadius: 6,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    button2: {
        backgroundColor: '#1d3557',
        paddingVertical: 16,
        paddingHorizontal: 14,
        borderRadius: 6,
        marginTop: 10
    }
})
