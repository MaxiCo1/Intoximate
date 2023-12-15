import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import games from "../games.json";
import { router } from "expo-router";
const GameRecomended = () => {
  const pageChange = () => {
    router.push({
      pathname: "/Juego1",
    });
  };
  return (
    <Pressable onPress={pageChange}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>Yo nunca nunca</Text>
        <Text style={styles.text}>
          La idea es contar algo que nunca hayas hecho y si alguien más en el
          grupo lo hizo, tienen que tomar un trago. ¡A jugar y disfrutar, papá!
          🎉🍻
        </Text>

        <View style={styles.slidePosition}>
          <Image source={require("../../assets/slidePosition.png")} />
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 225,
    backgroundColor: "#212121",
    borderRadius: 25,
    display: "flex",
    justifyContent: "space-around",
    padding: "5%",
  },
  text: { color: "#FBFCF8", fontSize: 14 },
  subTitle: { fontSize: 18, color: "#FBFCF8" },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  //insideContainer: { paddingLeft: 10 },
  slidePosition: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
});

export default GameRecomended;
