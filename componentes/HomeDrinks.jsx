import React from "react";
import axios from "axios";
axios.defaults.baseURL = "https://www.thecocktaildb.com/";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import CardDrinks from "./CardDrinks.jsx";

const HomeDrinks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async (end, start) => {
    try {
      setLoading(true);

      //rango de IDs
      function idRange(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
          ans.push(i);
        }
        return ans;
      }
      /*const idRange = Array.from(
        { length: end - start + 1 },
        (_, i) => i + "11000"
      );*/
      //Agarra cada trago segun su ID de la api
      const response = await axios.get(
        `api/json/v1/1/lookup.php?¡=${idRange(11000, 11100)}`
      );
      //console.log(response.data + "response");
      //Pone data en []
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("ERROR EN EL CATCH", error);
    }
  }, []);

  useEffect(() => {
    //if(setSearchData === true)
    getData();
  }, [getData]);
  console.log(data + "data");

  /*const getDrinkById = async (id) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.drinks;
  };

  getDrinkById("11007").then((data) => console.log(data));*/

  <View style={{ width: "80%" /*, height: "85%"*/ }}>
    <View>
      <CardDrinks />
    </View>
    <View>
      <CardDrinks />
    </View>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  text: {
    color: "#FBFCF8",
    //fontFamily: "Roboto-Regular",
    fontSize: 24,
  },
});
export default HomeDrinks;
