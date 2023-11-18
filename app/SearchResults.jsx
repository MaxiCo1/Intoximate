import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useLocalSearchParams } from "expo-router";

import CardDrinks from "./componentes/CardDrinks";
import RandomButton from "./componentes/RandomButton";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SearchResults = () => {
  const [SearchData, setSearchData] = useState([]);
  const [NewSearchData, setNewSearchData] = useState([]);

  const { palabra } = useLocalSearchParams();
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const getData = async () => {
    try {
      const response = await fetch(url + palabra);
      const SearchData = await response.json();

      setSearchData(SearchData.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getNewData = async () => {
    try {
      const response = await fetch(url + search);
      const NewSearchData = await response.json();

      setNewSearchData(NewSearchData.drinks);
    } catch (error) {
      console.log(error);
    }
  };

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
        <Text style={styles.title}>
          {search != ""
            ? "Resultados de " + search
            : "Resultados de " + palabra}
        </Text>
        <SearchBar
          platform="ios"
          placeholder="Buscar"
          containerStyle={{
            width: "90%",
            backgroundColor: "transparent",
          }}
          inputContainerStyle={{
            borderRadius: 22,
            backgroundColor: "#494163",
            color: "#EBEBF5",
          }}
          onChangeText={updateSearch}
          onSubmitEditing={getNewData}
          value={search}
        />
        <RandomButton />
        <View style={styles.containerDrinks}>
          {
            /*SearchData.map((drink, index) => (
            <CardDrinks key={index} drink={drink} />
          ))*/
            search != ""
              ? NewSearchData.map((drink, index) => (
                  <CardDrinks key={index} drink={drink} />
                ))
              : SearchData.map((drink, index) => (
                  <CardDrinks key={index} drink={drink} />
                ))
          }
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

export default SearchResults;
