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
            <Text style={styles.label} >Order Id:</Text>
            <Text style={styles.titleText}>#{id.slice(-3)} </Text>
            <View style={styles.columnContainer} >
                <Text style={styles.label} >Count products:</Text>
                <Text style={styles.quantityText}>x{productsCount}</Text>
                <Text style={styles.label} >Total:</Text>
                <Text style={styles.priceText}>${total}</Text>
            </View>
        </View >
    );
};

export default OrderItem;

