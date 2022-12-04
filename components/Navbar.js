import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Button
        style={styles.btn}
        title="Go to Student"
        onPress={() => navigation.navigate("Student")}
      />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  btn: {
    backgroundColor: "#3b5998",
    padding: 50,
    margin: 10,
    borderRadius: 10,
    width: 10,
    height: 10,
  },
});
