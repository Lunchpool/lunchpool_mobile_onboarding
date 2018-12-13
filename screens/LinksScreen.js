import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Map from './../components/Map.js'


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView>
        <Map latitude={37.78825}
             longitude={-122.4324}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
