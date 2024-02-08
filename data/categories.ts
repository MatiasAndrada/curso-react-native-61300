import type { Category } from "../types/types";

export async function getCategories(): Promise<Category[]> {
    try {
        const URL = "https://dummyjson.com/products/categories";
        const response = await fetch(URL);
        const data: Category[] = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}