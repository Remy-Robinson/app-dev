import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import {styles} from "./styles"; // Assuming styles are defined in a separate file

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style ={styles.container}>Welcome to the Home Screen!</Text>
    </View>
  );
}

