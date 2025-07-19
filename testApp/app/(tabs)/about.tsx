import { Text, View, StyleSheet } from "react-native";
import {styles} from "./styles"; // Removed to avoid conflict with local declaration

export default function About() {
  return (
    <View style={styles.container}>
      <Text style = {styles.container}>About this app</Text>
      <Text style = {styles.container}>This is a simple React Native application.</Text>
    </View>
  );
}
