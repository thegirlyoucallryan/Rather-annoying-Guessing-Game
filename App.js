
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
 return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={console.warn} />
}

 

    const configureNewGame = () => {
      setGuessRounds(0);
      setUserNumber(null);
    }


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);

  }

  let content = <StartGame onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds > 0){
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGame}/>
  }

  return (
    <View style={styles.screen} >
      <Header title={"Guess a Number"}/>
      {content}
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
 
});
