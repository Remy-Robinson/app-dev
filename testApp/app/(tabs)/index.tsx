import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import {styles} from "./styles"; // Assuming styles are defined in a separate file

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Link href={"/about"} style ={styles.button}>
      Go to the about screen!
      </Link>
    </View>
  );
}

