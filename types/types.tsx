export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPorcentage: number,
    rating: number,
    stock: number,
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

//?Category
export type Category = string[];