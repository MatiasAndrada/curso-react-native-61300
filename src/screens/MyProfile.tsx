import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles";
import { useSelector } from "react-redux";
//Types
import type { RootState } from "../store";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { StackParamList } from "../navigation/MyProfileStack";

type NavigationProp = StackNavigationProp<StackParamList, "MyProfile">

type Props = {
    navigation: NavigationProp
}
const MyProfile = ({ navigation }: Props) => {
  const { profileImage, imageCamera } = useSelector((state: RootState) => state.authReducer.value);

  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <>
          <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ImageSelector")}
      >
        <Text style={styles.text}>Add profile picture</Text>
      </Pressable>
      {
        /*   
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("LocationSelector")}
        >
          <Text style={styles.text}>My addresses</Text>
        </Pressable>
        */
      }
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontFamily: "InterRegular",
    fontSize: 18,
    color: "white",
  },
});