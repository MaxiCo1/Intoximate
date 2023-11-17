import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "@rneui/themed";

import { router } from "expo-router";

const Search = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const pageChange = () => {
    router.push({
      pathname: "/SearchResults",
      params: { palabra: search },
    });
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
        onSubmitEditing={pageChange}
        value={search}
      />
    </View>
  );
};

export default Search;
