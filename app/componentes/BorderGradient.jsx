import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const BorderGradient = ({ text, type }) => {
  return (
    <>
      <LinearGradient
        colors={["#714FA1", "#79D9D4", "#EC5B75", "#79D9D4", "#714FA1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.25, 0.5, 0.75, 1]} // Ajusta las ubicaciones para lograr el efecto deseado
        style={[
          styles.linearGradient,
          styles.glow,
          type == "top" ? styles.top : styles.bottom,
        ]}
      >
        <View
          style={[
            styles.innerContainer,
            type == "top" ? styles.top : styles.bottom,
          ]}
        >
          <Link href={"/HomeDrinks"} asChild>
            <Pressable>
              <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
          </Link>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 390, // <-- Outer Border Radius
  },
  innerContainer: {
    //borderRadius: 20, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: "#212121",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FBFCF8",
    //fontFamily: "Roboto-Regular",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    backgroundColor: "transparent",
  },

  top: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default BorderGradient;
