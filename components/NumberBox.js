import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';



const NumberBox = props => {
    return (
        <View style={{...styles.guess, ...props.style}}>
        <Text style={styles.number}>{ props.children }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guess:{
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,


    },

    number: {
        color: colors.secondary,
        fontSize: 30,
    }



    
})

export default NumberBox;