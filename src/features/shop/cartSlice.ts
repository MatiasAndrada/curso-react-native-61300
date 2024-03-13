import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define el tipo de un producto
interface Product {
    id: string;
    quantity: number;
    price: number;
}

// Define el estado inicial
interface CartState {
    user: string;
    updatedAt: string;
    total: number | null;
    items: Product[];
}

const initialState: CartState = {
    user: "userLogged",
    updatedAt: new Date().toLocaleString(),
    total: null,
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const productRepeated = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (productRepeated) {
                const itemsUpdated = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                        return item;
                    }
                    return item;
                });
                const total = itemsUpdated.reduce(
                    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                    0
                );
                state = {
                    ...state,
                    items: itemsUpdated,
                    total,
                    updatedAt: new Date().toLocaleString(),
                };
            } else {
                state.items.push(action.payload);
                const total = state.items.reduce(
                    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                    0
                );
                state = {
                    ...state,
                    items: state.items,
                    total,
                    updatedAt: new Date().toLocaleString(),
                };
            }
        },
    },
    /*   removeItem: (state, action ) */
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;