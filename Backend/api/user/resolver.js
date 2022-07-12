const UserController = require("./controller")

module.exports = {
    /** Example:
        {
            getUser(id: "623d690a594d6394256c3683") {
                email
                phone
                password
                name
                role
                id
            }
        }
    */
    getUser(options) {
        return UserController.getOne(options) || ["Backend error"]
    },
    /** Example:
        {
            allUser {
                email
                phone
                password
                name
                role
                id
            }
        }

    */
    allUser() {
        return UserController.getAll() || ["Backend error"]
    },

    /** Example:
        mutation register {
            register(email: "test@test.ru", password: "123", name: "test") {
                email
                name
            }
        }
    */
    register(options) {
        return UserController.register(options) || ["Backend error"]
    },

    /** Example:
        mutation login {
            login(email: "test@test.ru", password: "123") {
                token
                userId
                role
            }
        }       
    */
    login(options) {
        return UserController.login(options) || ["Backend error"]
    },

    /** Example:
        mutation change {
            changeUser(id: "623d7c923ad13bc283379e96", email: "test@change.ru") {
                email
                phone
                password
                name
                role
                id
            }
        }
    */
    changeUser(options) {
        return UserController.update(options) || ["Backend error"]
    },

    /** Example:
        mutation changePwd {
            changeUserPwd(id: "623e4a6d7962b0c979dbf2a1", lastPwd: "123", newPwd: "123") {
                email
                phone
                password
                name
                role
                id
            }
        }
    */
    changeUserPwd(options) {
        return UserController.updatePassword(options) || ["Backend error"]
    },

    /** Example:
        mutation delete {
            deleteUser(id: "623d7c923ad13bc283379e96") {
                email
                phone
                password
                name
                role
                id
            }
        }
    */
    deleteUser(options) {
        return UserController.delete(options) || ["Backend error"]
    }
}