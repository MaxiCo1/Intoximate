import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import games from "./games.json";
import BackButton from "./componentes/BackButton";

const Juego1 = () => {
  const [preguntaActual, setPreguntaActual] = useState(
    "Clickeá YO NUNCA NUNCA para jugar"
  );

  const obtenerPreguntaAleatoria = () => {
    const preguntasYoNunca = games.yo_nunca_nunca;
    const indiceAleatorio = Math.floor(Math.random() * preguntasYoNunca.length);
    const preguntaAleatoria = preguntasYoNunca[indiceAleatorio];
    setPreguntaActual(preguntaAleatoria);
  };
  return (
    <View
      style={{
        backgroundColor: "#212121",
        width: "100%",
        height: "100%",
        flex: 1
      }}
    >
      <BackButton />
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Text style={styles.tituloSeccion}>Yo Nunca Nunca</Text>
          <View style={styles.imgContainer}>
            <LinearGradient
              colors={["#714FA1", "#79D9D4", "#EC5B75", "#79D9D4", "#714FA1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 0.25, 0.5, 0.75, 1]} // Ajusta las ubicaciones para lograr el efecto deseado
              style={[styles.linearGradient, styles.glow]}
            >
              <View style={[styles.innerContainer]}>
                <Text style={styles.texto}>{preguntaActual}</Text>
              </View>
            </LinearGradient>
          </View>
          <Button
            style={styles.boton}
            title="YO NUNCA NUNCA"
            onPress={obtenerPreguntaAleatoria}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
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
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    flex:1,
    backgroundColor: "#3B3059",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  }
});

export default Juego1;
