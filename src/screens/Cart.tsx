import React from 'react';
import { View, Text, Pressable } from 'react-native';
//Store 
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from '../features/shop/cartSlice';
//Components
import CartList from '../components/cart/CartList';
//Styles 
import styles from "./styles/cart"
//Types 
import type { RootState } from '../store';
//Services
import { usePostOrderMutation } from '../services/shopService';
//Libraries
import uuid from 'react-native-uuid';

export default function CartScreen() {
    const dispatch = useDispatch();
    const userId = useSelector((state: RootState) => state.authReducer.value.localId)
    const { items, total } = useSelector((state: RootState) => state.cartReducer.value);
    const [triggerPost, result] = usePostOrderMutation();

    function generateId() {
        return uuid.v4()
    }

    function confirmCart() {
        triggerPost({
            id: generateId(),
            items: items,
            total: total,
            user: userId
        });
    }

    function clearCartHandler() {
        dispatch(emptyCart())
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleText}>Cart Screen</Text>
            {items.length > 0 ? (
                <>
                    <Text style={styles.totalText}>Total: ${total.toString()}</Text>
                    <CartList cartItems={items} />
                    <View style={styles.rowContainer}>
                        <Pressable onPress={clearCartHandler}>
                            <Text style={styles.buttonText}>Empty Cart</Text>
                        </Pressable>
                        <Pressable onPress={confirmCart}>
                            <Text style={styles.buttonText}>Generate Order</Text>
                        </Pressable>
                    </View>
                </>
            ) : (
                <Text style={styles.isEmptyText}>No hay productos agregados</Text>
            )}
        </View>
    );
}