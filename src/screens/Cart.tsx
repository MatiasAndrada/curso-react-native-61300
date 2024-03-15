import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
/* import { getProducts } from '../data/products'; */
//Store 
import { useSelector } from 'react-redux';
//Components
import CartItem from '../components/cart/CartItem';
//Types 
import type { RootState } from '../store';
import { usePostOrderMutation } from '../services/shopService';

export default function CartScreen() {
    const cartItems = useSelector((state: RootState) => state.cartReducer.value.items);
    const total = useSelector((state: RootState) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation();

    function confirmCart() {
        triggerPost({
            items: cartItems,
            total: total,
            user: "loggedUser"
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Cart Screen</Text>
            {cartItems.length > 0 ? (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={({ item }) => {
                            return <CartItem item={item} />
                        }}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <Text>Total: ${total.toString()}</Text>
                    <Pressable onPress={confirmCart}>
                        <Text>Confirm</Text>
                    </Pressable>
                </>
            ) : (
                <Text>No hay productos agregados</Text>
            )}
        </View>
    );
}