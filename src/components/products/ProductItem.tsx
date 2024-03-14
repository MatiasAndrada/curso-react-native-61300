/* import { Pressable } from "react-native"; */
import { Button, Card, Text } from "react-native-paper";
import React from "react";
//Store
import { useDispatch } from "react-redux";
import { addItem } from "../../features/shop/cartSlice";
//Styles
import { styles } from "./styles/productItem";
//Types
import type { Product, CartItem } from "../../types";

const ProductItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { id, title, brand, price, discountPorcentage, category, thumbnail, } = product;

  const cartItem: CartItem = {
    id,
    quantity: 1,
    title,
    brand,
    price,
    discountPorcentage,
    category,
    thumbnail,
  };

  function addCartHandler() {

    dispatch(addItem({ ...cartItem, quantity: 1 }))
  }

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
          onPress={() => addCartHandler()}
        >
          Add cart
        </Button>
        <Button style={styles.buttonCard}>View details</Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductItem;
