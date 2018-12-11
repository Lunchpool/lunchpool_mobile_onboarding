import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View >
        <ScrollView >
          <View >
            <TouchableOpacity onPress={this._handleHelpPress} >
              <Text >Simplified home page.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View >
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
});
