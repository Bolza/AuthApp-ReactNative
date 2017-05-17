import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, CardSection, Input } from './common';

class Login extends Component {
    state = {email: '', password: ''};
    func() {

    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        placeholder="Insert email"
                        value={this.state.text}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secure
                        label="password"
                        placeholder="Insert password"
                        value={this.state.text}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                  
                <CardSection>
                    <Button 
                        onPress={this.func()}
                        title='Login' 
                    />
                </CardSection>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
});

export { Login };
