import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView, Permissions, Location } from "expo";
import { DestinationButton } from "./Components/DestinationButton";
import { CurrentLocationButton } from "./Components/CurrentLocationButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null
    };
    this._getLocationAsync();
  }
  //access devices location via the GPS
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.Location);
    if (status !== "granted") console.log("Permission denied");

    let Location = await Location.getCurrentPositionAsync({
      enabledHighAccuracy: true
    });
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045
    };
    this.setState({ region: region });
  };
  centerMap() {
    const {
      latitude,
      latitudeDelta,
      longitude,
      longitudeDelta
    } = this.state.region;

    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <DestinationButton />
        <CurrentLocationButton cb={() => {this.centerMap()}}/>
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          ref={(map) => {this.map = map}}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
