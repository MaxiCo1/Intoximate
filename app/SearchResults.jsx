import React, { useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "./UserContext";
import CardDrinks from "./componentes/CardDrinks";

import { useLocalSearchParams } from "expo-router";

const SearchResults = () => {
  //const { searchData, resetSearch } = useContext(UserContext);
  const { SearchData } = useLocalSearchParams();

  console.log(SearchData);

  return (
    <View>
      <Text>Resultados de búsqueda</Text>
      {/*results.map((drink, index) => (
        <CardDrinks key={index} drink={drink} />
      ))*/}
    </View>
  );
};

export default SearchResults;
