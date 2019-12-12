import React, { Component } from "react";
import { Image, View } from "react-native";
import { Mapview } from "expo";

export default class Driver extends Component {
  constructor(props) {
    super(props);
    const driver = this.props.driver
      ? this.props.driver
      : { uid: "noDriversPassed", location: { latitude: 0, longitude: 0 } };
    const coordinate = new Mapview.AnimatedRegion({
      latitude: driver.location.latitude,
      logitude: driver.location.longitude
    });
    this.state = {
      driver: driver,
      coordinate: coordinate
    };
  }
}
