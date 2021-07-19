import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const MainButton= props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>

                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        color: 'white',
        borderRadius: 25,
        
        
    },

    buttonText:{
        fontSize: 17,
        color: 'white'

    }



    
})

export default MainButton;