import { View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { styles } from "./styles/productItem";
import { colors } from "../../styles/colors";
import type { Product } from "../../types"

const ProductItem = ({ product }: { product: Product }) => {

  const { title, price, thumbnail, } = product;

  return (
    <Card style={styles.cardContainer}>
      <Card.Cover source={{ uri: thumbnail }} style={styles.imageCard} />
      <Card.Content style={styles.contentContainer}>
        <Text variant="titleLarge" style={styles.textCard}>
          {title}
        </Text>
        {
          <Text variant="bodyMedium" style={styles.priceText}>
            Price: ${product.price}
          </Text>
        }
      </Card.Content>
      <Card.Actions style={styles.actionsCard}>
        <Button
          style={styles.buttonCard}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Add cart
        </Button>
        <Button style={styles.buttonCard}>View details</Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductItem;
