import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Card, CardSection } from './common';

class Login extends Component {
    state = {text: ''}

    func() {

    }
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                        style={styles.textinput}
                    >

                    </TextInput>
                </CardSection>

                <CardSection>
                </CardSection>
                <CardSection>
                    <Button 
                        onPress={this.func()}
                        title='Login'>
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        height: 60,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',

    },
	textinput: {
		height: 20,
        width: 100,
	} 
});

export { Login };