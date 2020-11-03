import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class pedro extends Component {
    render(){
        const {value, handleOnPress} = this.props;

        return (
            <TouchableOpacity style={styles.container} onPress={()=> handleOnPress(value)}>
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 4,
      margin: 4,
      backgroundColor: 'rgba(152, 100, 104, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        color: 'yellow',
        fontSize: 40,
    },
  });