import { View, Text, StyleSheet } from "react-native";
import React from "react";

import GameCard from "./componentes/GameCard";

const Homegames = () => {
  return (
    <View
      style={{
        backgroundColor: "#212121",
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "#3B3059",
          height: "95%",
          marginTop: "10%",
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.title}>Juegos</Text>
        </View>

        <View style={styles.containerRecomended}></View>
        <View style={styles.containerGames}>
          <GameCard redirect={"/Juego1"} text={"Yo Nunca Nunca"} />
          <GameCard redirect={"/Juego2"} text={"¿Qué Preferís?"} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerGames: {
    margin: "5%",
    height: "50%",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  containerRecomended: { height: "40%" },
  title: {
    color: "#FBFCF8",
    fontSize: 24,
    marginTop: "5%",
  },
});

export default Homegames;
