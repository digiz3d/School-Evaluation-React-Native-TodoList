import React from 'react';
import { connect } from 'react-redux';
import okImg from '../assets/ok.png';
import { View, Text, Image, StyleSheet } from 'react-native';

class PageItemDetails extends React.Component {
    render() {
        if (!this.props.todo) {
            return <View><Text>Loading</Text></View>;
        }

        return (
            <View style={styles.item}>
                <View style={styles.row}>
                    <Text style={styles.title}>{this.props.todo.text}</Text>
                    <Text style={styles.description}>{this.props.todo.description}</Text>
                </View>
                <View style={styles.rowCentered}>
                    {this.props.todo.isDone ? <Image style={styles.doneImage} source={okImg} /> : null}
                </View>
            </View>
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
    todo: state.entities.todos.items[state.entities.todos.selected]
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageItemDetails);
