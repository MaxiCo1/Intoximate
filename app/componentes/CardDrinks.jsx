import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CardDrinks = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <>
      <View style={[styles.Container]}>
        <Image style={[styles.image]} source={strDrinkThumb} />
        <Text style={styles.buttonText}>{strDrink}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 50,
    width: 100,
  },
  buttonText: {
    color: "#FBFCF8",
    //fontFamily: "Roboto-Regular",
    fontSize: 18,
    margin: 10,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
});
export default CardDrinks;
