import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import {styles} from "../styles"; 
const PlaceholderImage = require("../../assets/images/background-img.jpg");
import ImageViewer from "../../components/imageViewer";
import Button from "../../components/button";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View>
        <Button label="Choose a photo" />
        <Button label="Use a photo" />
      </View>


    </View>

  );
}

