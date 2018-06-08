import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { fetchTodosIfNeeded, refreshTodos } from '../actions/entities';

import TodoItem from '../components/TodoItem';

class MyListScreen extends React.Component {
    componentDidMount() {
        this.props.fetchTodosIfNeeded();
        this.gotoToPageDetails = this.gotoToPageDetails.bind(this);
    }

    gotoToPageDetails() {
        this.props.navigation.navigate('PageItemDetails');
    }

    render() {
        if (!this.props.todoItems) {
            return <Text>Loading</Text>;
        }

        const arr = Object.values(this.props.todoItems);
        return (
            <View>
                <FlatList
                    data={arr}
                    renderItem={({ item }) => {
                        return <TodoItem todoId={item.id} gotoToPageDetails={this.gotoToPageDetails} />
                    }
                    }
                    keyExtractor={(item, index) => index.toString()}
                    onRefresh={() => this.props.refreshTodos()}
                    refreshing={false}
                />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.entities.todos.isFetching,
    todoItems: state.entities.todos.items
});

const mapDispatchToProps = dispatch => ({
    fetchTodosIfNeeded: () => dispatch(fetchTodosIfNeeded()),
    refreshTodos: () => dispatch(refreshTodos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyListScreen);