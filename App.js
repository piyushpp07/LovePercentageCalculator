import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import DisplayLove from "./components/DisplayLove";
export default function App() {
  const [fname, setFname] = useState("")
  const [sname, setSname] = useState("")
  const [result, setResult] = useState("loading")

  Submitit = () => {
    // console.log("call ho rha ha");
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname
      }&sname=${sname}`,
      {
        headers: {
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
          "X-RapidAPI-Key": "d6c255d00cmsh9ace990296be47ep1840c1jsn46798d3ffeac"
        }
      }
    )
      .then(data => data.json())
      .then(data => setResult(data));
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header>
        <Appbar.Content
          title="Love % Calculator"
          style={{ alignItems: "center" }}
        />
      </Appbar.Header>

      <TextInput
        label="Person 1(Male)"
        style={styles.textInput}
        value={fname}
        onChangeText={text => setFname(text)}
      />

      <TextInput
        label="Person 2(Female)"
        style={styles.textInput}
        value={sname}
        onChangeText={text => setSname(text)}
      />

      <Button
        style={{ margin: 10 }}
        icon="heart"
        mode="contained"
        onPress={Submitit}
      >
        Click Me
      </Button>
      <DisplayLove data={result} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
    // justifyContent: "center",
    // alignItems: "center"
  },
  textInput: {
    margin: 5
  }
});
