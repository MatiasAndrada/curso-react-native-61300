import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { colors } from "../../styles/colors";
import { Product } from "../../types/types";

const ProductItem = ({ product }) => {
  const { title, price, thumbnail } = product;
  return (
    <Card style={styles.cardContainer}>
      <Card.Cover source={{ uri: thumbnail }} style={styles.imageCard} />
      <Card.Content style={styles.contentContainer}>
        <Text variant="titleLarge" style={styles.textCard}>
          {title}
        </Text>
        {/*         <Text variant="bodyMedium" style={styles.priceText}>
          Price: ${product.price}
        </Text> */}
      </Card.Content>
      <Card.Actions style={styles.actionsCard}>
        <Button>View details</Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10, // Agrega margen
    backgroundColor: colors.highlightBackground,
  },
  imageCard: {
    height: 250, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: "cover", // Usa "cover" para mantener la proporción y cubrir el contenedor
    margin: 10, // Elimina el margen de la imagen
  },
  contentContainer: {
    padding: 10, // Agrega relleno interno al contenido
  },
  textCard: {
    color: "#000",
    fontSize: 18,
  },
  priceText: {
    color: "#333", // Cambia el color del texto del precio según tus preferencias
    marginTop: 5, // Agrega margen superior al precio
  },
  actionsCard: {
    justifyContent: "flex-end", // Alinea los elementos al final de la tarjeta
  },
});
