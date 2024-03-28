import React from 'react';
import { View, Text, Pressable } from 'react-native';
/* import { getProducts } from '../data/products'; */
//Store 
import { useSelector } from 'react-redux';
//Components
import CartList from '../components/cart/CartList';
//Styles 
import styles from "./styles/cart"
//Types 
import type { RootState } from '../store';
//Services
import { usePostOrderMutation } from '../services/shopService';

export default function CartScreen() {
    const user = useSelector((state: RootState) => state.authReducer.value)
    console.log(user)
    const userToken = useSelector((state: RootState) => state.authReducer.value.token)
    const cartItems = useSelector((state: RootState) => state.cartReducer.value.items);
    const total = useSelector((state: RootState) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation();

    function confirmCart() {
        triggerPost({
            items: cartItems,
            total: total,
            user: userToken
        });
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleText}>Cart Screen</Text>
            {cartItems.length > 0 ? (
                <>
                    <CartList cartItems={cartItems} />
                    <Text style={styles.totalText}>Total: ${total.toString()}</Text>
                    <Pressable onPress={confirmCart}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </Pressable>
                </>
            ) : (
                <Text style={styles.isEmptyText}>No hay productos agregados</Text>
            )}
        </View>
    );
}