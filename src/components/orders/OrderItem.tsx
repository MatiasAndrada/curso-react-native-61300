import { StyleSheet, Text, View } from "react-native";
import React from "react";
//Styles 
import styles from "./styles/orderItem"
//Types
import type { OrderState } from "../../types";

const OrderItem = ({ item }: { item: OrderState }) => {
    const { id, productsCount } = item

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.titleText}>#{id} </Text>
            <Text style={styles.quantityText}>{productsCount}</Text>
        </View >
    );
};

export default OrderItem;

