import React, { useState, useContext } from "react";
import { View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { UserContext } from "../UserContext";

import { router } from "expo-router";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Search = () => {
  const [search, setSearch] = useState("");
  //const { setSearchData, setSearchPerformed } = useContext(UserContext);
  const [SearchData, setSearchData] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const setContext = async () => {
    try {
      const response = await fetch(url + search);
      const SearchData = await response.json();

      setSearchData(SearchData.drinks);
      //console.log(SearchData.drinks[0].strDrink);

      //setSearchPerformed(true);
    } catch (error) {
      console.log(error);
    }
    if (SearchData.length > 0) {
      // Pasa los parámetros directamente en el objeto de opciones
      router.push("/SearchResults", { SearchData });
    }
    /*if (SearchData != null && SearchData != undefined) {
      router.push({
        pathname: "/SearchResults",
        params: { SearchData: SearchData[0].strDrink },
      });
    }*/
  };

  return (
    <View>
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
        onSubmitEditing={setContext}
        value={search}
      />
    </View>
  );
};

export default Search;
