const FeedbackController = require("./controller")

module.exports = {
    /** Example:
        {
            getFeedback(id: "623af6e623fa3a43c4117c11") {
                id
                rate
                comment
                productId
                userId
                createdAt
                updatedAt
            }
        }
    */
    getFeedback(options) {
        return FeedbackController.get(options) || ["Backend error"]
    },

    /** Example:
        {
            getFeedbackByProductId(productId: "623af6e623fa3a43c4117c11") {
                id
                rate
                comment
                productId
                userId
                createdAt
                updatedAt
            }
        }
    */
    getFeedbackByProductId(options) {
        return FeedbackController.getByProductId(options) || ["Backend error"]
    },

    /** Example:
        {
            getFeedbackByUserId(userId: "623af6e623fa3a43c4117c11") {
                id
                rate
                comment
                productId
                userId
                createdAt
                updatedAt
            }
        }
    */
    getFeedbackByUserId(options) {
        return FeedbackController.getByUserId(options) || ["Backend error"]
    },

    /** Example:
        {
            getFeedbackByUserAndProductId(productId: "623af6e623fa3a43c4117c11", userId: "623af6e623fa3a43c4117c11") {
                id
                rate
                comment
                productId
                userId
                createdAt
                updatedAt
            }
        }
    */
    getFeedbackByUserAndProductId(options) {
        return FeedbackController.getByUserAndProductId(options) || ["Backend error"]
    },
    
    /** Example:
        mutation createFeedback {
            addFeedback(rate: 5, productId: "298rv988c23r823rx90", userId: "esflpkf02i290fi290f") {
                id
                rate
                comment
                productId
                userId
                createdAt
                updatedAt
            }   
        }
    */
    addFeedback(options) {
        return FeedbackController.create(options) || ["Backend error"]
    },

    /** Example:
        mutation changeFeedback{
            changeFeedback(id: "623af6e623fa3a43c4117c11", rate: 5) {
                id
                rate
                comment
                productId
                userId
                createdAt
                updatedAt
            }
        }
    */
    changeFeedback(options) {
        return FeedbackController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation deleteFeedback {
            deleteFeedback(id: "623c774ae66abd625f78be4f") {
                id
                rate
                comment
                productId
                userId
                createdAt
                updatedAt
            }
        }
    */
    deleteFeedback(options) {
        return FeedbackController.delete(options) || ["Backend error"]
    }
}