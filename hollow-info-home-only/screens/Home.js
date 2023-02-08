import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/bgg.png')}
          style={styles.backgroundImage}>
  
          <TouchableOpacity
            style={styles.knightCard}
            onPress={() => this.props.navigation.navigate('Knight')}>
            <Text style={styles.knightText}>Knight</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.hornetCard}
            onPress={() => this.props.navigation.navigate('Hornet')}>
            <Text style={styles.hornetText}>Hornet</Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={styles.hollowKnightCard}
            onPress={() => this.props.navigation.navigate('HollowKnight')}>
            <Text style={styles.hollowKnightText}>Hollow Knight</Text>
          </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  knightText: {
    fontSize: 35,
    marginTop: 38,
    paddingLeft: 84,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  hornetText: {
    fontSize: 35,
    marginTop: 38,
    paddingLeft: 84,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#794149'
  },
  hollowKnightText: {
    fontSize: 35,
    marginTop: 35,
    paddingLeft: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e68758'
  },
  hornetCard: {
    backgroundColor: '#292d27',
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 60,
    borderRadius: 30,
    borderColor: '#794149',
    borderWidth: 7,
  },
  knightCard: {
    backgroundColor: '#292d27',
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 7
  },
  hollowKnightCard: {
    backgroundColor: '#292d27',
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 60,
    borderRadius: 30,
    borderColor: '#e68758',
    borderWidth: 7
  },
  saberMais: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  iconImage: {
    position: 'absolute',
    width: 200,
    height: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
});