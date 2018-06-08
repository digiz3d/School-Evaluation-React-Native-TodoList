import React from 'react';
import { connect } from 'react-redux';
import okImg from '../assets/ok.png';
import { TouchableHighlight, View, Text, Image, StyleSheet } from 'react-native';

import { selectTodo } from '../actions/entities';

class TodoItem extends React.Component {
    handleClick() {
        this.props.select();
        this.props.gotoToPageDetails();
    }
    render() {
        if (!this.props.todo) {
            return <View><Text>Loading</Text></View>;
        }

        return (
            <TouchableHighlight onPress={() => this.handleClick()} style={styles.item}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.title}>{this.props.todo.text}</Text>
                        <Text style={styles.description}>{this.props.todo.description}</Text>
                    </View>
                    <View style={styles.rowCentered}>
                        {this.props.todo.isDone ? <Image style={styles.doneImage} source={okImg} /> : null}
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-between'
    },
    row: {
        flexDirection: 'column',
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
    todo: state.entities.todos.items[ownProps.todoId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    select: () => dispatch(selectTodo(ownProps.todoId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem);
