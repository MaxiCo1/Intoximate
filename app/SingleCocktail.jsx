import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { Image } from "expo-image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useLocalSearchParams();
  const [SingleCocktailData, setSingleCocktailData] = useState([]);
  const [loading, setLoading] = useState(false);

  let strDrink,
    strDrinkThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15;

  let arrClean, arrMap;
  const getSingleCocktailData = async () => {
    try {
      const response = await fetch(url + id);
      const SingleCocktailData = await response.json();
      setLoading(false);
      setSingleCocktailData(SingleCocktailData.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getSingleCocktailData();
  }, []);

  if (SingleCocktailData.length > 0) {
    strDrink = SingleCocktailData[0].strDrink;
    strDrinkThumb = SingleCocktailData[0].strDrinkThumb;
    strInstructions = SingleCocktailData[0].strInstructions;
    strIngredient1 = SingleCocktailData[0].strIngredient1;
    strIngredient2 = SingleCocktailData[0].strIngredient2;
    strIngredient3 = SingleCocktailData[0].strIngredient3;
    strIngredient4 = SingleCocktailData[0].strIngredient4;
    strIngredient5 = SingleCocktailData[0].strIngredient5;
    strIngredient6 = SingleCocktailData[0].strIngredient6;
    strIngredient7 = SingleCocktailData[0].strIngredient7;
    strIngredient8 = SingleCocktailData[0].strIngredient8;
    strIngredient9 = SingleCocktailData[0].strIngredient9;
    strIngredient10 = SingleCocktailData[0].strIngredient10;
    strIngredient11 = SingleCocktailData[0].strIngredient11;
    strIngredient12 = SingleCocktailData[0].strIngredient12;
    strIngredient13 = SingleCocktailData[0].strIngredient13;
    strIngredient14 = SingleCocktailData[0].strIngredient14;
    strIngredient15 = SingleCocktailData[0].strIngredient15;
    var arr = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
    ];
    arrClean = arr.filter((value) => value !== null);
    console.log(arrClean);
  }
  console.log(arrClean);
  if (arrClean != null) {
    return (
      <View
        style={{ backgroundColor: "#212121", width: "100%", height: "100%" }}
      >
        <View style={styles.containerViolet}>
          <Text style={styles.tituloSeccion}>{strDrink}</Text>
          <View style={styles.imgContainer}>
            <LinearGradient
              colors={["#714FA1", "#79D9D4", "#EC5B75", "#79D9D4", "#714FA1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 0.25, 0.5, 0.75, 1]} // Ajusta las ubicaciones para lograr el efecto deseado
              style={[styles.linearGradient, styles.glow]}
            >
              <View style={[styles.innerContainer]}>
                <Image style={[styles.image]} source={strDrinkThumb} />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.container}>
            <Text style={styles.titulo}>Ingredientes</Text>
            {arrClean.map((inst, index) => {
              return (
                <Text style={styles.texto} key={index}>
                  {inst}
                </Text>
              );
            })}
          </View>
          <View style={styles.container}>
            <Text style={styles.titulo}>Instrucciones</Text>
            <Text style={styles.texto}>{strInstructions}</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "85%",
    height: "85%",
    borderRadius: 25,
  },
  innerContainer: {
    borderRadius: 25,
    flex: 1,
    margin: 3, // <-- Border Width
    backgroundColor: "#212121",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 20,
    color: "#EBEBF5",
    textAlign: "center",
  },
  tituloSeccion: {
    fontSize: 24,
    color: "#EBEBF5",
    textAlign: "center",
  },
  texto: {
    fontSize: 14,
    color: "#EBEBF5",
    textAlign: "center",
  },
  image: { width: "100%", height: "100%", borderRadius: 25 },
  imgContainer: {
    width: "80%",
    backgroundColor: "#212121",
    height: "40%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 25,
  },
  container: {
    width: "90%",
    alignItems: "left",
  },
  containerViolet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#3B3059",
    height: "95%",
    marginTop: "10%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    alignItems: "center",
  },
});

export default SingleCocktail;
