import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    marginBottom: 40
  },


  quote: {
    height: "30%",
    fontSize: 20,
    marginTop: 30,
    textAlign: "center"
  },
  author: {
    fontSize: 26,
    marginBottom: 30,
    textAlign: "center"
  },


  button: {
    position: "absolute",
    bottom: 30,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 8
  },
  buttonText: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 15,
    marginRight: 15
  }
});

export default style;