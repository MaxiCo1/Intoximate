import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import { Image } from "expo-image";

const CardDrinks = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  return (
    <>
      <Link
        href={{ pathname: "/SingleCocktail", params: { id: idDrink } }}
        style={[styles.Container]}
      >
        <Image style={[styles.image]} source={strDrinkThumb} />
        <Text style={styles.buttonText}>{strDrink}</Text>
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: "40%",
    width: "35%",
    textAlign: "center",
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
