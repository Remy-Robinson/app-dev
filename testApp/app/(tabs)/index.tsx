import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import {styles} from "../styles"; 
const PlaceholderImage = require("../../assets/images/background-img.jpg");
import ImageViewer from "../../components/imageViewer";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}

