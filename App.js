import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';
import fb from './screens/fb';
import instagram from './screens/instagram';

export default class App extends React.Component{
    render(){
      return(
        <AppContainer>
          
        </AppContainer>
      )
    }
  }

  const TabNavigator = createBottomTabNavigator({
        fb:{screen:fb},
        instagram:{screen:instagram}
  })

  const AppContainer = createAppContainer(TabNavigator)
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
