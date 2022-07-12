const ProductInfoController = require("./controller")

module.exports = {
    /** Example:
        {
            getInfo(id: "623af6e623fa3a43c4117c11") { #(если не передавать айди, то вернутся вообще все)
                id
                productId
                title
                value
                createdAt
                updatedAt
            }
        }
    */
    getInfo(options) {
        return ProductInfoController.get(options) || ["Backend error"]
    },

    /** Example:
        {
            getProductInfo(productId: "623af6e623fa3a43c4117c11") {
                id
                productId
                title
                value
                createdAt
                updatedAt
            }
        }
    */
    getProductInfo(options) {
        return ProductInfoController.getProductInfo(options) || ["Backend error"]
    },

    /** Example:
        mutation addProductInfo {
            addProductInfo(price: 100, quantity: 13, name: "O4ko test", productInfo: "123123afd123asdad12") {
                id
                productId
                title
                value
                createdAt
                updatedAt
            }   
        }
    */
    addProductInfo(options) {
        return ProductInfoController.create(options) || ["Backend error"]
    },

    /** Example:
        mutation changeProductInfo{
            changeProductInfo(id: "623af6e623fa3a43c4117c11", price: 999, quantity: 21) {
                id
                productId
                title
                value
                createdAt
                updatedAt
            }
        }
    */
    changeProductInfo(options) {
        return ProductInfoController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation createProduct {
            deleteProduct(id: "623c774ae66abd625f78be4f") {
                id
                productId
                title
                value
                createdAt
                updatedAt
            }
        }
    */
    deleteProductInfo(options) {
        return ProductInfoController.delete(options) || ["Backend error"]
    }
}