import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const HomeScreen = props => {
  
  const Sound = require('react-native-sound');
  const bg_music = new Sound('plantparty.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log("Cant Play Sound.", error)
    return;
  }
  // play when loaded
  bg_music.setVolume(.5).setNumberOfLoops(-1).play();
  });

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Party Plant!</Text>

        <AwesomeButtonRick
          style={styles.button}
          type = "anchor"
          width = {100}
          onPress={() => props.navigation.navigate('Game')}>
          <Text style = {styles.buttonText}>Play</Text>
        </AwesomeButtonRick>

        <AwesomeButtonRick
          style={styles.button}
          type = "anchor"
          width = {150}
          onPress={() => props.navigation.navigate('HowTo')}>
          <Text style = {styles.buttonText}>How To Play </Text>
        </AwesomeButtonRick>

        <AwesomeButtonRick
          style={styles.button}
          type = "anchor"
          width = {100}
          onPress={() => props.navigation.navigate('Options')}>
          <Text style = {styles.buttonText}>Options</Text>
        </AwesomeButtonRick>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: .85,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 44,
    fontFamily: 'Futura',
    color: 'green',
    alignSelf: 'center',
    paddingTop: 50,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Futura',
    fontSize: 22,
    color: 'green', 
    alignSelf: 'center'
  },
});

export default HomeScreen;
