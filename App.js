import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { createSwitchNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { NativeRouter as Router } from 'react-router-native';
import thunk from 'redux-thunk';

import rootReducer from './src/reducers';

import LoginScreen from './src/screens/LoginScreen';
import MyListScreen from './src/screens/MyListScreen';
import AboutScreen from './src/screens/AboutScreen';
import PageItemDetails from './src/screens/PageItemDetails';
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const AuthScreen = createStackNavigator(
    {
        Login: { screen: LoginScreen, navigationOptions: { title: 'LOOOGIN' } }
    }
);
const AppTabNavigator = createMaterialTopTabNavigator(
    {
        MyList: { screen: MyListScreen, navigationOptions: { title: 'Ma liste' } },
        About: { screen: AboutScreen, navigationOptions: { title: 'A propos de' } }
    }
);
const AppStackNavigator = createStackNavigator({
    MyTab: { screen: AppTabNavigator, navigationOptions: { title: 'My TodoList' } },
    PageItemDetails: { screen: PageItemDetails,navigationOptions: { title: 'Détails' }}
},
    {
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: '#2195f2'
            },
            headerTintColor: 'white',
            headerRight: (
                <TouchableHighlight
                    onPress={() => alert('Bon ça ne marche pas xD')}
                    style={{ padding: 5 }}
                >
                    <Text style={{ color: 'white' }}>
                        Ajouter
                    </Text>
                </TouchableHighlight>
            )
        }
    });

const MainSwitch = createSwitchNavigator({
    Auth: { screen: AuthScreen },
    App: { screen: AppStackNavigator }
}, { initialRouteName: 'Auth' });

export default App = () => (
    <Provider store={store}>
        <Router>
            <MainSwitch />
        </Router>
    </Provider>
);
