import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CardDrinks from "./CardDrinks.jsx";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const HomeDrinks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInitialData = async () => {
    try {
      const response = await fetch(url + "vodka");
      const data = await response.json();
      setLoading(false);
      setData(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getInitialData();
  }, []);

  return (
    <View style={{ width: "80%" }}>
      <View style={styles.containerRecomended}></View>
      <View style={styles.containerDrinks}>
        {data.map((drink, index) => {
          return <CardDrinks key={index} drink={drink} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRecomended: { flex: 2 },
  containerDrinks: {
    flex: 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#FBFCF8",
    fontSize: 24,
  },
});
export default HomeDrinks;
