
export function getProducts() {
    const URL = "https://fakestoreapi.com/products";
    return fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}