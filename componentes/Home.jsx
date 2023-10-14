import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const Main = () => {
  return (
    <View style={{ width: "80%", height: "85%" }}>
      <View style={containerTop}>
        <Text style={styles.text}>Juegos</Text>
      </View>
      <View style={containerBottom}>
        <Text style={styles.text}>Tragos</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#714FA1",
    borderWidth: 2,
  },
  text: {
    color: "#FBFCF8",
    //fontFamily: "Roboto-Regular",
    fontSize: 24,
  },
  top: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  bottom: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
const containerTop = StyleSheet.compose(styles.container, styles.top);
const containerBottom = StyleSheet.compose(styles.container, styles.bottom);

export default Main;
