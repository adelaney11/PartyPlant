import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const OptionsScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Options</Text>
      <AwesomeButtonRick
          style={styles.button}
          type = "anchor"
          width = {100}
          onPress={() => alert('mute the game')}>
          <Text style = {styles.buttonText}>Mute</Text>
        </AwesomeButtonRick>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: .65,
    flexDirection: 'column',
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
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

export default OptionsScreen;
