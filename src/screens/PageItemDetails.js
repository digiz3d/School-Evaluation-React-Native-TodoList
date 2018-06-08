import React from 'react';
import { connect } from 'react-redux';
import okImg from '../assets/ok.png';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import { setTodoDoneAsync } from '../actions/entities';

class PageItemDetails extends React.Component {
    handleDoneButton() {
        this.props.setDone(this.props.todo);
    }

    render() {
        if (!this.props.todo) {
            return <View><Text>Loading</Text></View>;
        }

        return (
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.todo.text}</Text>
                <Text style={styles.description}>{this.props.todo.description}</Text>
                <Text style={styles.description}>{this.props.todo.doneDate}</Text>
                {!this.props.todo.isDone ? <Button title="Fait" onPress={() => this.handleDoneButton()} /> : <Image style={styles.doneImage} source={okImg} />}
                <Button
                    title="Ajouter au calendrier"
                    onPress={() => alert('ajouté !')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-between'
    },
    title: {
        fontSize: 14,
    },
    description: {
        fontSize: 11
    },
    rowCentered: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    doneImage: {
        width: 20,
        height: 20
    }
});

const mapStateToProps = (state, ownProps) => ({
    todo: state.entities.todos.items[state.entities.todos.selected]
});

const mapDispatchToProps = (dispatch) => ({
    setDone: (todo) => dispatch(setTodoDoneAsync(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageItemDetails);
