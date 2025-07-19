import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e", 
    color: "#FFFFFF",
    padding: 20,
  },

  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    borderRadius: 5,
  },

  image: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    resizeMode: "cover",
  }
});

export {styles};