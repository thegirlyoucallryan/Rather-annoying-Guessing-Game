

{/* <script src="http://localhost:8097"></script> */}
import React, { useState}  from 'react';
import { View, StyleSheet, Text,  Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import MainButton from '../components/MainButton';

import NumberBox from '../components/NumberBox';

const StartGame = props => {
    const[userGuess, setUserGuess]= useState('');
    const[confirm, setConfirm] = useState(false);
    const[selectedNumber, setSelectedNumber] = useState()

    const guessHandler = inputText => {
        setUserGuess(inputText.replace(/[^0-9]/g, ''))
    } ;

    const resetHandler = () => {
        setUserGuess('');
        setConfirm(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(userGuess);
        if(isNaN(chosenNumber)  || chosenNumber <= 0 || chosenNumber > 99){
           Alert.alert('invalid number', 'Please Enter a Number Between 1 - 99',[{text: 'Ok', style: 'cancel', onPress: resetHandler}])
            return;
           
        }
        setConfirm(true);
        setSelectedNumber(chosenNumber);
        setUserGuess('');
        Keyboard.dismiss();
      
    };
let confirmedOutput;
    if(confirm){
        confirmedOutput = <Card style={styles.confirmCard}>
            <View style={styles.confirmText}>
            <Text>You Selected</Text>
            <NumberBox>{selectedNumber}</NumberBox>
           
            <MainButton onPress={()=>props.onStartGame(selectedNumber)}>Start Game</MainButton>
            </View>
            </Card>
    }



    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
           <Card style={styles.inputBox}>
                <Text> Select a Number</Text>
                <Input blurOnSubmit autoCorrect={false} keyboardType="numeric" maxLength={2} style={styles.input} onChangeText={guessHandler} value={userGuess}/> 
                <View style={styles.buttonBox}>
                <View style={styles.button} ><Button color={colors.secondary}title="Reset" onPress={resetHandler}/></View>
                <View style={styles.button}><Button title="Confirm" color={colors.primary} onPress={confirmInputHandler}/></View>
                </View>
                </Card>
                {confirmedOutput}
          
           
           



        </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'


    },
   

    title: {
        fontSize: 20,
        fontFamily: 'bold',
       
        

    },
    buttonBox: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around",
        paddingHorizontal: 10,

    },

    inputBox: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        

    },
    button:{
        width: 90,
    },
    input:{
        width: 50,
        textAlign: 'center',

    },

    confirmCard:{

        marginTop: 20,
        marginHorizontal: 30,
        paddingHorizontal: 50
       


    },

   confirmText:{
       alignItems: 'center',

   }




})

export default StartGame;