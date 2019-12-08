import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo-vector-icons";

//Automatically fits into any mobile device window
const WIDTH = Dimensions.get("window").width;
export const DestinationButton = function(props) {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.leftCol}>
        <Text style={{ fontSize: 8 }}>{"\u25A0"}</Text>
      </View>
      <View style={styles.centerCol}>
        <Text style={{ fontFamily: "cursive", fontSize: 21, color: "#545454" }}>
          Where to?
        </Text>
      </View>
      <View style={styles.rightCol}>
        <Ionicons name='md-car' color="#0000000" size={25} style={{alignSelf:'center'}}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    postion: "absolute",
    flexDirection: "row",
    width: WIDTH - 40,
    height: 60,
    top: 110,
    left: 20,
    borderRadius: 2,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#0000000",
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  leftCol: {
    flex: 1,
    alignItems: "center"
  },
  centerCol: {
    flex: 4
  },

  rightCol: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed"
  }
});