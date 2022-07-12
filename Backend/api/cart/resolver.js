const CartController = require("./controller")

module.exports = {
    /** Example:
        mutation addToCart{
            addToCart(userId: "623e4a6d7962b0c979dbf2a1", productId: "6240485de351d0bb1e4d7b2f", count: 2) {
                id
                userId
                items {
                    count
                    productId
                }
            }
        }
    */
    addToCart(options) {
        return CartController.addTo(options) || ["Backend error"]
    },

    /** Example:
        {
            getCart(id: "623af6e623fa3a43c4117c11") {
                id
                userId
                items {
                    count
                    productId
                }
            }
        }
    */
    getCart(options) {
            return CartController.get(options) || ["Backend error"]
        },

    /** Example:
        {
            getCartByUserID(userId: "623e4a6d7962b0c979dbf2a1") {
                _id
                userId  
                items { 
                    count
                    productId {
                        _id
                        price
                        quantity
                        name
                    }
                }
            }
        }
    */
    getCartByUserID(options) {
        return CartController.getByUserID(options) || ["Backend error"]
    },

    /** Example:
        mutation updateCart {
            updateCart(id: "624362b379a9fce8d5fe9208", items: [{
                    count: 2,
                    productId: "6240485de351d0bb1e4d7b2f"
                    },
                    {
                    count: 1,
                    productId: "6240485de351d0bb1e4d7b2f"
                    },
                    {
                    count: 5,
                    productId: "6240485de351d0bb1e4d7b2f"
                    }]) {
                id
                userId
                items {
                count
                productId
                }
            }
        }
    */
    updateCart(options) {
        return CartController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation updateCountOfItemInCart {
            updateCountOfItemInCart(userId: "623e4a6d7962b0c979dbf2a1", productId: "6240485de351d0bb1e4d7b2f", count: 15) {
                id
                userId
                items {
                count
                productId
                }
            }
        }

    */
    updateCountOfItemInCart(options) {
        return CartController.updateCount(options) || ["Backend error"]
    },

    /** Example:
        mutation updateCountOfItemInCart {
            deleteFromCart(userId: "623e4a6d7962b0c979dbf2a1", productId: "62404ae2e351d0bb1e4d7b5a") {
                id
                userId
                items {
                count
                productId
                }
            }
        }

    */
    deleteFromCart(options) {
        return CartController.deleteFrom(options) || ["Backend error"]
    },

    /** Example:
        mutation clearCartByUserID {
            clearCartByUserID(id: "623c774ae66abd625f78be4f") {
                id
                userId
                productsIds
            }
        }
    */
    clearCartByUserID(options) {
        return CartController.clearByUserID(options) || ["Backend error"]
    },
}