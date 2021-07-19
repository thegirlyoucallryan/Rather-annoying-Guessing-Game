import React, {useState, useRef, useEffect} from 'react';
import { View, StyleSheet, Text, Button, Alert, ScrollView} from 'react-native';
import NumberBox from '../components/NumberBox';
import Card from '../components/Card';
import { Ionicons } from "@expo/vector-icons";
import MainButton from '../components/MainButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { black } from 'ansi-colors';



const generateRandomBetween = ( min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndnum = Math.floor(Math.random() *(max-min)) + min;
    if(rndnum === exclude){
        return generateRandomBetween( min, max, exclude);
    } else{
        return rndnum
    }
}

const renderListItem = (value, numofRound) => (<View key={value} style={styles.list}>
    <Text>#{numofRound}</Text>
    <Text>{value}</Text>
</View>);

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props

    useEffect(() => {
        if(currentGuess === userChoice){
           onGameOver(pastGuesses.length)
           
        }
    },[currentGuess, userChoice, onGameOver ]);

    const nextGuessHandler= direction => {

        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)){
            Alert.alert('stop lying',"Wrong Direction", [{text: 'Sorry!', style: 'cancel'}]);
            return;
    
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess;

        } else {
            currentLow.current = currentGuess + 1;
        }
       const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
       setCurrentGuess(nextNumber);
       setPastGuesses(curPastGuesses => [nextNumber,...curPastGuesses])

      




    }


    return (
        <View style={styles.screen}>
            <Text>Opponents Guess</Text>
            <NumberBox>{currentGuess}</NumberBox>
            <Card style={styles.buttons}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove"/>
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'higher')}><Ionicons name="md-add"/></MainButton>
            </Card>
            <View style={styles.listView}>
            <ScrollView>{pastGuesses.map(guess => renderListItem(guess))}</ScrollView>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },

    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        paddingVertical:45,
        width: 400,
        maxWidth: "70%",
        
    },

    listView:{
        flex: 1,
        width: '90%',
        alignContent: 'center',
        justifyContent: 'center'
      
      
        

    },

    list:{
        borderColor: Colors.primary,
        padding: 15,
        marginVertical: 9,
        borderWidth: 2,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    
      
    }




    
})

export default GameScreen;