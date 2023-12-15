import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";

import GameCard from "./componentes/GameCard";
import BackButton from "./componentes/BackButton";
import GameRecomended from "./componentes/GameRecomended";

const Homegames = () => {
  return (
    <View
      style={{
        backgroundColor: "#212121",
        height: "100%",
        width: "100%",
        flex: 1,
      }}
    >
      <BackButton />

      <View
        style={{
          backgroundColor: "#3B3059",
          height: "95%",
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <View>
          <Text style={styles.title}>Juegos</Text>
        </View>

        <GameRecomended />

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
    height: "40%",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "10%",
  },

  title: {
    color: "#FBFCF8",
    fontSize: 24,
    marginTop: 20,
    marginBottom: "5%",
  },
});

export default Homegames;
