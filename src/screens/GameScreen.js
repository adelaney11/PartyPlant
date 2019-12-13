import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const GameScreen = props => {
    commands = ['swipe up!', 'swipe down!', 'swipe left!', 'swipe right!']
    
    const [gestureName, setName] = useState('none')
    const [path, setPath] = useState(require('../assets/jumping-plant.gif'));
    const [counter, setCount] = useState(0)
    const [command, setCommand] = useState('swipe to dance!')
    const [isValidMove, setIsValidMove] = useState(false)


    changeCommand = (isValidMove) => {
        setCommand(commands[Math.floor(Math.random() * commands.length)])
        setTimeout(function(){
            if (isValidMove === false) {
                alert("you took too long!")
                props.navigation.navigate("Home")
            } 
        }, 4000);
    }

    onSwipeUp = () => {
        if (command === 'swipe to dance!' || command === 'swipe up!') {
            setName('SWIPE_UP')
            setPath(require('../assets/jumping-plant.gif'))
            setCount(counter + 1)
            setIsValidMove(true)
            changeCommand()
        }
        else {
            alert("wrong move!")
            props.navigation.navigate("Home")
        }
    };
    onSwipeDown = () => {
        if (command === 'swipe to dance!' || command === 'swipe down!') {
            setName('SWIPE_DOWN')
            setPath(require('../assets/jumping-plant.gif'))
            setCount(counter + 1)
            setIsValidMove(true)
            changeCommand()
        }
        else {
            alert("wrong move!")
            props.navigation.navigate("Home")
        }
    };
    onSwipeLeft = () => {
        if (command === 'swipe to dance!' || command === 'swipe left!') {
            setName('SWIPE_LEFT')
            setPath(require('../assets/discoing-plant-.gif'))
            setCount(counter + 1)
            setIsValidMove(true)
            changeCommand()
        }
        else {
            alert("wrong move!")
            props.navigation.navigate("Home")
        }
    };
    onSwipeRight = () => {
        if (command === 'swipe to dance!' || command === 'swipe right!') {
            setName('SWIPE_RIGHT')
            setPath(require('../assets/hula-ing-plant.gif'))
            setCount(counter + 1)
            changeCommand()
        }
        else {
            alert("wrong move!")
            props.navigation.navigate("Home")
            
        }
    };
    onSwipe = (gestureName) => {
        switch (gestureName) {
            case 'SWIPE_UP':
              setPath(require('../assets/jumping-plant.gif'));
              break;
            case 'SWIPE_DOWN':
              setPath(require('../assets/jumping-plant.gif'));
              break;
            case 'SWIPE_LEFT':
              setPath(require('../assets/discoing-plant-.gif'));
              break;
            case 'SWIPE_RIGHT':
              setPath(require('../assets/hula-ing-plant.gif'));
              break;
          }
    }
    return(
        <GestureRecognizer
                onSwipe={this.onSwipe}
                onSwipeUp={this.onSwipeUp}
                onSwipeDown={this.onSwipeDown}
                onSwipeLeft={this.onSwipeLeft}
                onSwipeRight={this.onSwipeRight}
                config={{
                    velocityThreshold: 0.3,
                    directionalOffsetThreshold: 80
                }}
                style = {{flex: 1}}>
            <View>
                <Text style = {styles.title}> Score: {counter} </Text> 
                <Image
                    source = {path}
                    style = {{
                    height: 500,
                    width: 250,
                    alignSelf: 'center'}}>
            </Image>
            <Text style = {styles.title}>{command}</Text>
            </View>
        </GestureRecognizer>     
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 44,
        fontFamily: 'Futura',
        color: 'green',
        alignSelf: 'center',
        paddingTop: 50,
    },
});

export default GameScreen;