import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";
import Search from "./componentes/SearchBar.jsx";
import CardDrinks from "./componentes/CardDrinks.jsx";
import Recomended from "./componentes/RecomendedSlider.jsx";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const HomeDrinks = () => {
  const [InitialData, setInitialData] = useState([]);

  const [RecomendedData, setRecomendedData] = useState([]);

  //initial data
  const getInitialData = async () => {
    try {
      const response = await fetch(url + "wine");
      const InitialData = await response.json();

      setInitialData(InitialData.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  //data for recomended
  const getRecomendedData = async () => {
    try {
      const response = await fetch(url + "vodka");
      const RecomendedData = await response.json();

      setRecomendedData(RecomendedData.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecomendedData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#212121",
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "#3B3059",
          height: "95%",
          marginTop: "10%",
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.title}>Tragos recomendados</Text>
        </View>

        <Search />

        <View style={styles.containerRecomended}></View>
        <View style={styles.containerDrinks}>
          {InitialData.map((drink, index) => {
            return <CardDrinks key={index} drink={drink} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDrinks: {
    margin: "5%",
    height: "50%",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  containerRecomended: { height: "40%" },
  title: {
    color: "#FBFCF8",
    fontSize: 24,
    marginTop: "5%",
  },
});
export default HomeDrinks;
