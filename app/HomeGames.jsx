import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";

import GameCard from "./componentes/GameCard";
import BackButton from "./componentes/BackButton";

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
      <ScrollView>
        <View
          style={{
            backgroundColor: "#3B3059",
            height: "460%",
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerGames: {
    height: "100%",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  containerRecomended: { height: "40%" },
  title: {
    color: "#FBFCF8",
    fontSize: 24,
    marginTop: 20,
  },
});

export default Homegames;
