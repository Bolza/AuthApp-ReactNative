import firebase from 'firebase';
import React, { Component } from 'react';
import { Button } from 'react-native-material-ui';
import { Text, StyleSheet } from 'react-native';

import { Card, CardSection, Input, Container } from './common';

class Login extends Component {
    
    state = { 
        email: '', 
        password: '',
        error: '',
        message: '',
        loading: false,
    };
    
    onCreationError(resp) {
        console.log('onCreationError', resp);
        this.setState({ loading: false, message: '', error: resp.message });
    }
    onCreationSuccess(resp) {
        console.log('onCreationSuccess', resp);
        this.setState({ loading: false, error: '', message: 'Creation Success' });
    }
    onLoginSuccess(resp) {
        console.log('onLoginSuccess', resp);
        this.setState({ loading: false, error: '', message: 'Login Success' });
    }
    
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onCreationSuccess.bind(this))
                    .catch(this.onCreationError.bind(this));
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        placeholder="Insert email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email.toLowerCase() })}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        secure
                        label="password"
                        placeholder="Insert password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                
                <Container
                    spring
                    loading={this.state.loading}
                    error={this.state.error}
                    message={this.state.message}
                >
                    <Text> wtf </Text>
                </Container>

                <CardSection>
                    <Button 
                        disabled={this.state.loading}
                        style={cc}
                        primary raised 
                        onPress={this.onButtonPress.bind(this)}
                        text='Login' 
                    />
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    loginButton: {
        flex: 1,
    },
});
const cc = { container: styles.loginButton };


export { Login };
