import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';


import Feed from './Feed'
import logo from './assets/instagram.png'

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen 
                name="Feed" 
                component={Feed} 
                options= {{ 
                    headerTitle: <Image source={logo} />,
                    headerTitleStyle: {
                        alignSelf: 'center',
                      },
                    headerStyle: {
                        backgroundColor: '#f5f5f5',
                      },
                    }
                }
              />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } 
  };