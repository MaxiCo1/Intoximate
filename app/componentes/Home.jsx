import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import BorderGradient from "./BorderGradient.jsx";

const Main = () => {
  return (
    <View style={{ width: "80%" /*, height: "85%"*/ }}>
      <View style={containerTop}>
        <BorderGradient type="top" text="Juegos" redirect="/HomeGames" />
      </View>
      <View style={containerBottom}>
        <BorderGradient type="bottom" text="Tragos" redirect="/HomeDrinks" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  text: {
    color: "#FBFCF8",
    //fontFamily: "Roboto-Regular",
    fontSize: 24,
  },
});
const containerTop = StyleSheet.compose[(styles.container, styles.top)];
const containerBottom = StyleSheet.compose[(styles.container, styles.bottom)];

export default Main;
