import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Content, Container, Header, Title, Button, Left, Right, Body, Icon, Tab, Tabs, ScrollableTab } from 'native-base';
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {

    const MapComponent = () =>
      <Container style={{ maxHeight:"100%"}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={ {height:"100%"} }
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </Container>

    return (
      <ScrollView>
        <MapComponent/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
