import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';

import logo from '../assets/logo.png';

class AboutScreen extends React.Component {
    debug(){
        console.log(this.props.state);
    }

    render() {
        return (
            <View style={styles.screen}>
                <Image style={{ width: "80%" }} source={logo} resizeMode="contain" />
                <Text>TodoList</Text>
                <Text>version 1.0</Text>
                <Text>Léandre DAUMONT</Text>
                <Button onPress={() => this.debug()} title="DEBUG"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
});

const mapStateToProps = (state, ownProps) => ({
    state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);