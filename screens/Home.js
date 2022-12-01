import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Student"
        onPress={() => navigation.navigate("Student")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
