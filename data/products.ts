
export async function getProducts() {
    try {
        const URL = "https://dummyjson.com/products?limit=100";
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        })

        const data = await response.json()
        return Promise.resolve(data)
    }
    catch (error) {
        return Promise.reject(error)
    }
}
