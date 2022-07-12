const FavoriteController = require("./controller")

module.exports = {
    /** Example:
        mutation updateCountOfItemInCart {
        addToFavorite(userId: "623e4a6d7962b0c979dbf2a1", productId: "6240485de351d0bb1e4d7b2f") {
            id
            userId
            productsIds
        }
        }
    */
    addToFavorite(options) {
        return FavoriteController.addTo(options) || ["Backend error"]
    },

    /** Example:
        {
            getFavoriteByUserID(userId: "624053efa7890c81c29c979e") {
                _id  
                userId
                productsIds {
                _id
                price
                quantity
                name
                }
            }
        }
    */
    getFavorite(options) {
            return FavoriteController.get(options) || ["Backend error"]
        },

    /** Example:
        {
            getFavoriteByUserID (name: "test", isParent: true) {
                id
                userId
                productsIds
            }
        }
    */
    getFavoriteByUserID(options) {
        return FavoriteController.getByUserID(options) || ["Backend error"]
    },

    /** Example:
        mutation updateCountOfItemInCart {
            updateFavorite(productsIds: ["623e4a6d7962b0c979dbf2a1", "623e4a6d7962b0c979dbf2a1", "623e4a6d7962b0c979dbf2a1", ], id: "624362b379a9fce8d5fe920a" ) {
                id
                userId
                productsIds
            }
        }
    */
    updateFavorite(options) {
        return FavoriteController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation updateCountOfItemInCart {
            deleteFromFavorite(productId: "62404ae2e351d0bb1e4d7b5a", userId: "623e4a6d7962b0c979dbf2a1" ) {
                id
                userId
                productsIds
            }
        }
    */
    deleteFromFavorite(options) {
        return FavoriteController.deleteFrom(options) || ["Backend error"]
    },

    /** Example:
        mutation updateCountOfItemInCart {
            clearFavoriteByUserID(userId: "623e4a6d7962b0c979dbf2a1" ) {
                id
                userId
                productsIds
            }
        }
    */
    clearFavoriteByUserID(options) {
        return FavoriteController.clearByUserID(options) || ["Backend error"]
    },
}