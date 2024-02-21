import type { Category, Product } from "../types/types";
export async function getProducts(): Promise<Product[]> {
    try {
        const URL = "https://dummyjson.com/products?limit=100";
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        })

        const data = await response.json()
        const products = data.products
        return Promise.resolve(products)
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export async function getProductsOfCategory(category: string): Promise<Product[]> {
    try {
        const URL = "https://dummyjson.com/products/category/" + category;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json()
        const products = data.products
        return Promise.resolve(products)
    }
    catch (error) {
        return Promise.reject(error)
    }
}
