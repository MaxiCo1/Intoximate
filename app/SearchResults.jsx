import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CardDrinks from "./componentes/CardDrinks";

import { useLocalSearchParams } from "expo-router";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SearchResults = () => {
  const [SearchData, setSearchData] = useState([]);
  const { palabra } = useLocalSearchParams();

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

  console.log(SearchData);

  return (
    <View>
      <Text>Resultados de búsqueda</Text>
      {SearchData.map((drink, index) => (
        <CardDrinks key={index} drink={drink} />
      ))}
    </View>
  );
};

export default SearchResults;
