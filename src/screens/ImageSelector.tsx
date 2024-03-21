import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
//Styles
import styles from "./styles/imageSelector";
//Types 
import type { RootState } from "../store";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { StackParamList } from "../navigation/MyProfileStack";

type NavigationProp = StackNavigationProp<StackParamList, "ImageSelector">

type Props = {
  navigation: NavigationProp
}

const ImageSelector = ({ navigation }: Props) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state: RootState) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        const uriImage: string = result.assets[0].uri
        setImage(uriImage);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable onPress={pickImage}>
            <Text>Take another photo</Text>
          </Pressable>
          <Pressable onPress={confirmImage}>
            <Text>Confirm photo</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text>No photo to show...</Text>
          <Pressable onPress={pickImage}>
            <Text>Take a photo</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;
