import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { Link } from "expo-router";
import Search from "./componentes/SearchBar.jsx";
import CardDrinks from "./componentes/CardDrinks.jsx";
import Recomended from "./componentes/RecomendedSlider.jsx";
import BackButton from "./componentes/BackButton.jsx";
import RecomendedSlider from "./componentes/RecomendedSlider.jsx";

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
      <BackButton />
      <View
        style={{
          backgroundColor: "#3B3059",
          height: "95%",
          marginTop: "5%",
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.title}>Tragos</Text>
        </View>

        <Search />

        <View style={styles.containerRecomended}>
          <RecomendedSlider data={RecomendedData[0]} />
        </View>

        <FlatList
          data={InitialData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <CardDrinks drink={item} />
            </View>
          )}
          numColumns={2}
          key={2}
          contentContainerStyle={styles.containerDrinks}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDrinks: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
  },
  item: { width: 100, height: 200, margin: 40, marginTop: 0 },
  containerRecomended: { marginBottom: "10%" },
  title: {
    color: "#FBFCF8",
    fontSize: 24,
    marginTop: "5%",
  },
});
export default HomeDrinks;
