import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Home from "./componentes/Home.jsx";
import HomeDrinks from "./componentes/HomeDrinks.jsx";

import axios from "axios";
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}*/
export default function App() {
  return (
    <View style={styles.container}>
      <HomeDrinks />
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  },
});
