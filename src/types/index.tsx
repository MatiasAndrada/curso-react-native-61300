
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

export interface CartItem extends Pick<Product, 'id' | 'thumbnail' | 'category' | 'price' | 'discountPorcentage' | 'title' | 'brand'> {
    quantity: number;
}

export interface CartState {
    user: string;
    updatedAt: string;
    total: number | null;
    items: CartItem[];
}

export type Category = "smartphones" | "laptops" | "fragrances" | "skincare" | "groceries" | "home-decoration" | "furniture" | "tops" | "womens-dresses" | "womens-shoes" | "mens-shirts" | "mens-shoes" | "mens-watches" | "womens-watches" | "womens-bags" | "womens-jewellery" | "sunglasses" | "automotive" | "motorcycle" | "lighting";
