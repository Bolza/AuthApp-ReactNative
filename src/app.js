import firebase from 'firebase';
import { COLOR, ThemeProvider, Button } from 'react-native-material-ui';
import React, { Component } from 'react';
import { View } from 'react-native';

import { Login, Header } from './components';
import { Spinner } from './components/common';


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
    state = {
        loading: true,
        user: { logged: false }
    }
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


        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ loading: false });
            if (user) {
                this.setState({ user: { logged: true } });
            } else {
                this.setState({ user: { logged: false } });
            }
        });
    }

    renderContent() {
        if (this.state.loading) {
             return <Spinner />;
        } else if (this.state.user.logged) {
            return (
                <Button 
                    primary raised  
                    text='Logout' 
                    onPress={firebase.auth().signOut}
                />
            );
        } 
        
        return <Login />;
    }

    render() {
        return (
            <View>
                <Header text='auth' />
                <ThemeProvider uiTheme={uiTheme}>
                    {this.renderContent()}                
                </ThemeProvider>
            </View>
        );
    }
}

export default App;
