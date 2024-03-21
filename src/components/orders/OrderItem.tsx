import { StyleSheet, Text, View } from "react-native";
import React from "react";

//Types
import type { CartItem } from "../../types";

const OrderItem = ({ item }: { item: CartItem }) => {


    return (
        <View>
            <Text>Order Item</Text>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({});