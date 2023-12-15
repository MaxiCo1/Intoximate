import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";

import { router } from "expo-router";

const RecomendedSlider = ({ data }) => {
  //const { strDrink, strDrinkThumb, idDrink } = data;
  const pageChange = () => {
    router.push({
      pathname: "/SingleCocktail",
      params: { id: data?.idDrink },
    });
  };
  return (
    <Pressable onPress={pageChange}>
      <View style={styles.container}>
        <ImageBackground src={data?.strDrinkThumb} style={styles.image}>
          <View style={styles.insideContainer}>
            <Text style={styles.text}>{data?.strDrink}</Text>
            <Image
              source={require("../../assets/puntuacion.png")}
              style={styles.puntuacion}
            />
          </View>
          <View style={styles.slidePosition}>
            <Image source={require("../../assets/slidePosition.png")} />
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: { width: 350, height: 200 },
  text: { color: "#FBFCF8", fontSize: 18 },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  insideContainer: { paddingLeft: 10, marginTop: 80 },
  slidePosition: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
});
export default RecomendedSlider;
