const ProductController = require("./controller")

module.exports = {
    /** Example:
        {
            getProduct(id: "623af6e623fa3a43c4117c11") {
                price
                quantity
                name
                id
            }
        }
    */
    getProduct(options) {
        return ProductController.get(options) || ["Backend error"]
    },

    /** Example:
        mutation createProduct {
            addProduct(price: 100, quantity: 13, name: "O4ko test", productInfo: "123123afd123asdad12") {
                price
                quantity
                name
                id
                createdAt
                updatedAt
                productInfo
            }   
        }
    */
    addProduct(options) {
        return ProductController.create(options) || ["Backend error"]
    },

    /** Example:
        mutation change{
            changeProduct(id: "623af6e623fa3a43c4117c11", price: 999, quantity: 21) {
                price
                quantity
                name
                id
            }
        }
    */
    changeProduct(options) {
        return ProductController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation change{
            changeProduct(id: "623af6e623fa3a43c4117c11", count: 20) { #(приход 20 данных товаров, возможно отрицательнле число)
                price
                quantity
                name
                id
            }
        }
    */
    addQuantityToProduct(options) {
        return ProductController.addCount(options) || ["Backend error"]
    },

    /** Example:
        mutation createProduct {
            deleteProduct(id: "623c774ae66abd625f78be4f") {
                price
                quantity
                name
                id
                createdAt
                updatedAt
            }
        }
    */
    deleteProduct(options) {
        return ProductController.delete(options) || ["Backend error"]
    },

    /** Example:
        mutation createProduct {
            deleteProduct(id: "623c774ae66abd625f78be4f") {
                price
                quantity
                name
                id
                createdAt
                updatedAt
            }
        }
    */
    searchProductsOrCategories(options) {
        return ProductController.searchProductsOrCategories(options) || ["Backend error"]
    },

    /** Example:
        {
            getProductInCategories(categoryId: "624046cbe351d0bb1e4d7ae1") {
                id
                name
                img
            }
        }
    */
    getProductInCategories(options) {
        return ProductController.getProductInCategories(options) || ["Backend error"]
    },
}