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
    backgroundColor: "#e91e63",
    padding: 10,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  image: {
    width: 150,
    height: 300,
    borderRadius: 10,
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems : "center",

  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  buttonContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export {styles};