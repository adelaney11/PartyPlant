import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const HowToScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>How To Play</Text>
            <Text style = {styles.instructions}>Do the commands on the screen as fast as you can...</Text>
            <Text style = {styles.instructions}>As you complete commands, the speed will increase!</Text>
            <Text style = {styles.instructions}>Do not let the tempo of the music distract you!</Text>
            <Text style = {styles.instructions}>What's your highscore? Compete with friends!</Text>
        </View>
    )
}

styles = StyleSheet.create({
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
    instructions: {
        fontFamily: 'Futura',
        fontSize: 24,
        color: 'green', 
        alignSelf: 'center'
    }
});

export default HowToScreen; 
