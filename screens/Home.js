import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "../components/Navbar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Home</Text>
      <Button
        title="Go to Student"
        onPress={() => navigation.navigate("Student")}
      />
      <View style={styles.nav}>
        <Navbar />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  nav: {
    height: 100,
    width: "100%",
    borderColor: "black",
    borderTopWidth: 1,
  },
});
