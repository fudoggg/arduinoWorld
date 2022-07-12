const OrderController = require("./controller")

module.exports = {
    /** Example:
        mutation search{
            createOrder(isDeliver: true, sum: 3200.2, items: [{count: 2, productId: "62404ae2e351d0bb1e4d7b5a"}, {count: 2, productId: "6240485de351d0bb1e4d7b2f"}], user: {userId: "623d7c923ad13bc283379e96", phone: "8903666"}) {
                id
                status
                isDeliver
                sum
                items {
                count
                productId
                }
            }
        }
    */
    getOrder(options) {
        return OrderController.get(options) || ["Backend error"]
    },

    /** Example:
        {
            getOrderByUserId(userId: "623af6e623fa3a43c4117c11") {
                id
                status
                isDeliver
                sum
                items
                user
                createdAt
                updatedAt
            }
        }
    */
    getOrderByUserId(options) {
        return OrderController.getByUserId(options) || ["Backend error"]
    },

    /** Example:
        mutation createOrder {
            createOrder(isDeliver: false, sum: 120, 
                items: [{count: 3, productId: "624ab098213c1a8ce0befec8"}, 
                        {count: 7, productId: "624a997a6acb6dc6fd56b717"},
                        {count: 9, productId: "62404f16e351d0bb1e4d7b95"},], 
                user:{  userId: "623e4a6d7962b0c979dbf2a1",
                        phone: "89619666666",
                        email: "zalupa@konya",
                        fullName: "Ya daun sorry",
                        addres: "pushkina dom kolotushkina"}) {
                id
                status
                isDeliver
                sum
                items {
                count
                productId
                }
                user {
                userId
                phone
                email
                fullName
                addres
                }
                createdAt
                updatedAt
            }
        }
    */
    createOrder(options) {
        return OrderController.create(options) || ["Backend error"]
    },

    /** Example:
        mutation updateOrderStatus {
            updateOrderStatus(productId: "623af6e623fa3a43c4117c11", userId: "623af6e623fa3a43c4117c11") {
                id
                status
                isDeliver
                sum
                items
                user
                createdAt
                updatedAt
            }
        }
    */
    updateOrderStatus(options) {
        return OrderController.updateStatus(options) || ["Backend error"]
    },
    
    /** Example:
        mutation updateOrder {
            updateOrder(rate: 5, productId: "298rv988c23r823rx90", userId: "esflpkf02i290fi290f") {
                id
                status
                isDeliver
                sum
                items
                user
                createdAt
                updatedAt
            }   
        }

    */
    updateOrder(options) {
        return OrderController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation deleteOrder{
            deleteOrder(id: "623af6e623fa3a43c4117c11", rate: 5) {
                id
                status
                isDeliver
                sum
                items
                user
                createdAt
                updatedAt
            }
        }
    */
    deleteOrder(options) {
        return OrderController.update(options) || ["Backend error"]
    },
}