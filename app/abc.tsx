import { Text, View } from "react-native";
import { Button } from 'react-native-paper';
import React from "react";
import { StatusBar } from "expo-status-bar";
export default function Abc() {
  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff"
      }}
      >
       <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
      <Text>Edaaa.</Text>
    </View>
      </>
  );
}
