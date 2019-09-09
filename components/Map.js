import React from 'react';
import { Content, Container, Header, Title, Button, Left, Right, Body, Icon, Tab, Tabs, ScrollableTab } from 'native-base';
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


    const Map = (props) =>
      <Container style={{ maxHeight:"100%"}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={ {height:"100%"} }
          region={{
            latitude: props.latitude,
            longitude: props.longitude,
            latitudeDelta: 0.15,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </Container>

export default Map
