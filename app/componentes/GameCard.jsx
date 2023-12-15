import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const GameCard = ({ redirect, text }) => {
  const Redirect = () => {
    router.push({
      pathname: redirect,
    });
  };
  return (
    <Pressable onPress={Redirect} style={[styles.Container]}>
      <LinearGradient
        colors={["#714FA1", "#79D9D4", "#EC5B75", "#79D9D4", "#714FA1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.25, 0.5, 0.75, 1]} // Ajusta las ubicaciones para lograr el efecto deseado
        style={[styles.linearGradient]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    height: 50, // <-- Outer Border Radius
    borderRadius: 20,

    width: "85%",
  },
  innerContainer: {
    borderRadius: 20, // <-- Inner Border Radius
    flex: 1,
    margin: 2, // <-- Border Width
    backgroundColor: "#212121",
  },
  buttonText: {
    color: "#FBFCF8",
    //fontFamily: "Roboto-Regular",
    fontSize: 14,
    textAlign: "center",
    margin: 12,
    backgroundColor: "transparent",
  },
  Container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
});
export default GameCard;
