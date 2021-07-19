import React from "react";
import { View, StyleSheet } from "react-native";


const Card = props => {
    return(
        <View style={{...style.card, ...props.style}}>
            {props.children}

        </View>
    )

};

const style = StyleSheet.create({
    card:  {
      
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6, // allll of this is for IOS
        shadowOpacity: .26,
        backgroundColor:"white",
        elevation: 40,
        padding: 14,
        borderRadius: 10,
    },
});

export default Card;