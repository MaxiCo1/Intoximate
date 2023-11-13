import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Search = ({ history }) => {
  console.log(history);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const getSearchData = async (search) => {
    try {
      const response = await fetch(url + search);
      const searchData = await response.json();
      setSearchData(searchData.drinks);
      history.push("/search-results", { searchData: searchData.drinks });
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
      onSubmitEditing={() => getSearchData(search)}
      value={search}
    />
  );
};

export default Search;
