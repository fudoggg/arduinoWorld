const CategoriesController = require("./controller")

module.exports = {
    /** Example:
        {
            getCategory(id: "623af6e623fa3a43c4117c11") {
                id
                name
                parentId
                isParent
            }
        }
    */
    getCategory(options) {
        return CategoriesController.get(options) || ["Backend error"]
    },

    /** Example:
        {
            getCategory(id: "623af6e623fa3a43c4117c11") {
                id
                name
                parentId
                isParent
            }
        }
    */
    getCategoryByParent(options) {
        return CategoriesController.getByParent(options) || ["Backend error"]
    },

    /** Example:
        mutation change {
            addCategory (name: "test", isParent: true) {
                id
                name
                parentId
                isParent
            }
        }
    */
    addCategory(options) {
        return CategoriesController.create(options) || ["Backend error"]
    },

    /** Example:
        mutation change{
            changeCategory(id: "623e68d945dc9b6ec023eb09", name: "test2") {
                id
                name
                parentId
                isParent
            }
        }
    */
    changeCategory(options) {
        return CategoriesController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation createProduct {
            deleteCategory(id: "623c774ae66abd625f78be4f") {
                id
                name
                parentId
                isParent
            }
        }
    */
    deleteCategory(options) {
        return CategoriesController.delete(options) || ["Backend error"]
    }
}