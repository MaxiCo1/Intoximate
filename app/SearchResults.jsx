import { View, Text } from "react-native";
import React from "react";
import CardDrinks from "./componentes/CardDrinks";

const SearchResults = ({ location }) => {
  const { searchData } = location.state;

  return (
    <View>
      <Text>Resultados de busqueda</Text>
      {searchData.map((drink, index) => {
        return <CardDrinks key={index} drink={drink} />;
      })}
    </View>
  );
};

export default SearchResults;
