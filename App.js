import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Home from "./componentes/Home.jsx";
import HomeDrinks from "./componentes/HomeDrinks.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  },
});
