import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native-web";

const RecomendedSlider = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <ImageBackground style={[styles.container]} source={strDrinkThumb}>
      <Text>{strDrink}</Text>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default RecomendedSlider;
