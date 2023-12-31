import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";
import { router } from "expo-router";

const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const RandomButton = () => {
  let id = 0;
  const [RandomData, setRandomData] = useState([]);

  const getRandomData = async () => {
    try {
      const response = await fetch(url);
      const SearchData = await response.json();
      setRandomData(SearchData.drinks);
    } catch (error) {
      console.log(error);
    }

    if (RandomData.length > 0) {
      id = RandomData[0].idDrink;
      //console.log(RandomData);
      //console.log(id);

      router.push({
        pathname: "/SingleCocktail",
        params: { id: id },
      });
    }
  };
  //console.log(id);
  console.log(RandomData);

  return (
    <Pressable onPress={getRandomData} style={[styles.Container]}>
      <LinearGradient
        colors={["#714FA1", "#79D9D4", "#EC5B75", "#79D9D4", "#714FA1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.25, 0.5, 0.75, 1]} // Ajusta las ubicaciones para lograr el efecto deseado
        style={[styles.linearGradient]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>Chupi Random</Text>
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
    margin: 10,
    backgroundColor: "transparent",
  },
  Container: {
    width: "100%",
    alignItems: "center",
  },
});
export default RandomButton;
