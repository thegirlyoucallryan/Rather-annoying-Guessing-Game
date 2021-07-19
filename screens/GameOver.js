import React from 'react';
import { View, StyleSheet, Text,Button, Image } from 'react-native';
import NumberBox from '../components/NumberBox';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOver = props => {
    return (

        <View style={styles.screen}>
            <NumberBox style={styles.userNumber}>{props.userNumber}</NumberBox>
            <View style={styles.imageBox}>
                <Image style={styles.image}
                //  source={require('../assets/success.png')}
                source={{uri: "https://i.pinimg.com/originals/e2/2d/0c/e22d0c9e7dd9f758a7a7deff5549a215.jpg"}}
                  />
            </View>
            <Text>Game Over!!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <MainButton onPress={props.onRestart}>Play Again</MainButton>

        </View>

    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 9,
    },

    imageBox:{
        borderRadius: 12,
        width: '68%',
        height: 280,
        borderWidth: 3,
        borderColor: colors.primary,
        overflow: 'hidden',
        marginVertical: 30,
    },

    userNumber:{
        padding: 30,
        width: 130
    }



    
})

export default GameOver;