import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { colors } from "../../styles/colors";
import { Product } from "../../types/types";

const ProductItem = ({ product }) => {
  console.log("🦇 ~ ProductItem ~ product:", product);
  console.log(":item");
  return (
    <View style={styles.container}>
      <Text>Holaaa</Text>
      <Text style={styles.text} variant="titleLarge">
        HOLAAAA
      </Text>
      {/*             <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                    <Text variant="titleLarge">{product.title}</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: product.image }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card> */}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
