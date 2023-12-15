import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "./componentes/BackButton";

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
  }
  let ingredientIndex = 1;
  let instructionIndex = 1;
  const renderListItem = ({ item, index }) => {
    if (item === "Ingredientes:") {
      ingredientIndex = 1; // Reinicia el contador de ingredientes
      return <Text style={styles.titulo}>{item}</Text>;
    } else if (item === "Instrucciones:") {
      instructionIndex = 1; // Reinicia el contador de instrucciones
      return <Text style={styles.titulo}>{item}</Text>;
    } else if (typeof item === "string") {
      if (ingredientIndex <= arrClean.length) {
        return (
          <Text
            style={[styles.texto, styles.container]}
          >{`${ingredientIndex++}. ${item}`}</Text>
        ); // Usa y luego incrementa ingredientIndex
      } else {
        return (
          <Text
            style={[styles.texto, styles.container]}
          >{`${instructionIndex++}. ${item}`}</Text>
        ); // Usa y luego incrementa instructionIndex
      }
    } else if (item.type === "image") {
      return (
        <View style={styles.imgContainer}>
          <LinearGradient
            colors={["#714FA1", "#79D9D4", "#EC5B75", "#79D9D4", "#714FA1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.25, 0.5, 0.75, 1]} // Ajusta las ubicaciones para lograr el efecto deseado
            style={[styles.linearGradient, styles.glow]}
          >
            <View style={[styles.innerContainer]}>
              <Image style={[styles.image]} source={item.source} />
            </View>
          </LinearGradient>
        </View>
      );
    }
  };

  if (arrClean != null) {
    // Combina todos los elementos en un solo array
    const combinedData = [
      { type: "image", source: strDrinkThumb },
      "Ingredientes:",
      ...arrClean,
      "Instrucciones:",
      ...strInstructions.split("."),
    ];

    return (
      <View
        style={{
          backgroundColor: "#212121",
          width: "100%",
          height: "100%",
        }}
      >
        <BackButton />
        <View style={styles.containerViolet}>
          <Text style={styles.tituloSeccion}>{strDrink}</Text>
          <FlatList
            data={combinedData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderListItem}
            contentContainerStyle={styles.renderContainer}
          />
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
    margin: 3, // <-- Border Width
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
    marginBottom: "5%",
  },
  texto: {
    fontSize: 14,
    color: "#EBEBF5",
    textAlign: "center",
  },
  image: { width: "100%", height: 249, borderRadius: 25 },
  imgContainer: {
    width: "80%",
    backgroundColor: "#212121",
    height: 300,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 40,
    marginBottom: 20,
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "left",
    marginLeft: "5%",
  },
  containerViolet: {
    backgroundColor: "#3B3059",
    marginTop: "10%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    alignContent: "center",
  },
  renderContainer: {
    height: "100%",
  },
});

export default SingleCocktail;
