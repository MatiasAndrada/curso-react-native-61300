import { StyleSheet, Text, View } from "react-native";
import React from "react";
//Styles 
import styles from "./styles/orderItem"
//Types
import type { CartItem } from "../../types";

const OrderItem = ({ item }: { item: CartItem }) => {
    const { title, price, quantity } = item
    const priceAmount = price * quantity

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.titleText}>{title} </Text>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Text style={styles.priceText}> {priceAmount} </Text>
        </View >
    );
};

export default OrderItem;

