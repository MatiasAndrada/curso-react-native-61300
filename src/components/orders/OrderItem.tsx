import { StyleSheet, Text, View } from "react-native";
import React from "react";
//Styles 
import styles from "./styles/orderItem"
//Types
import type { OrderState } from "../../types";

const OrderItem = ({ item }: { item: OrderState }) => {
    const { id, productsCount, total } = item

    return (
        <View style={styles.cardContainer}>
            <text style={styles.label} >Order Id:</text>
            <Text style={styles.titleText}>#{id.slice(-3)} </Text>
            <View style={styles.columnContainer} >
                <text style={styles.label} >Count products:</text>
                <Text style={styles.quantityText}>x{productsCount}</Text>
                <text style={styles.label} >Total:</text>
                <Text style={styles.priceText}>${total}</Text>
            </View>
        </View >
    );
};

export default OrderItem;

