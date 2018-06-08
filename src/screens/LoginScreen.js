import React from 'react';
import { withRouter } from 'react-router-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { loginAsync } from '../actions/auth';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pw: ''
        }
        this.navigateToApp = this.navigateToApp.bind(this);
    }

    handleButtonPressed() {
        if (this.state.email.trim() !== '' && this.state.pw.trim() !== '') {
            this.props.logIn(this.state.email, this.state.pw, this.navigateToApp);
        }
    }

    navigateToApp() {
        return this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.form}>
                <TextInput onChangeText={(txt) => this.setState({ email: txt })} style={styles.input} placeholder="Email" underlineColorAndroid="transparent" />
                <TextInput onChangeText={(txt) => this.setState({ pw: txt })} style={styles.input} placeholder="Mot de passe" underlineColorAndroid="transparent" secureTextEntry />
                <Button onPress={() => this.handleButtonPressed()} title="Se connecter" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        padding: 10,
        flex: 1,
    },
    input: {
        borderRadius: 5,
        borderColor: 'silver',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: 'white'
    }
});

const mapStateToProps = (state, ownProps) => ({
    isLoading: state.auth.loading,
    isLoggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
    logIn: (a, b, c) => dispatch(loginAsync(a, b, c))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);