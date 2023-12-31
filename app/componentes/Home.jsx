import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import BorderGradient from "./BorderGradient.jsx";
import BackButton from "./BackButton.jsx";

const Main = () => {
  return (
    <View style={{ width: "90%", height: "95%" }}>
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
  }
});
const containerTop = StyleSheet.compose[(styles.container, styles.top)];
const containerBottom = StyleSheet.compose[(styles.container, styles.bottom)];

export default Main;
