import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useLocalSearchParams } from "expo-router";
import BackButton from "./componentes/BackButton";

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
      <BackButton />
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

            marginBottom: "5%",
          }}
          inputStyle={{ color: "#EBEBF5" }}
          onChangeText={updateSearch}
          onSubmitEditing={getNewData}
          value={search}
        />
        <RandomButton />
        <FlatList
          data={search != "" ? NewSearchData : SearchData}
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
    marginTop: "10%",
  },
  item: { width: 100, height: 200, margin: 40, marginTop: 0 },
  title: {
    color: "#FBFCF8",
    fontSize: 24,
    marginTop: "5%",
  },
});

export default SearchResults;
