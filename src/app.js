import firebase from 'firebase';
import { Button, COLOR, ThemeProvider } from 'react-native-material-ui';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Login, Header } from './components';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

class App extends Component {
    
    componentWillMount() {
          const config = {
            apiKey: 'AIzaSyD3HW5LYj3iBKYx_MVUeYOkAjemWxAi3oA',
            authDomain: 'auth-1386d.firebaseapp.com',
            databaseURL: 'https://auth-1386d.firebaseio.com',
            projectId: 'auth-1386d',
            storageBucket: 'auth-1386d.appspot.com',
            messagingSenderId: '964139243799',
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                <Header text='auth' />
                <ThemeProvider uiTheme={uiTheme}>
                <Login />
                </ThemeProvider>
            </View>
        );
    }
}

export default App;
