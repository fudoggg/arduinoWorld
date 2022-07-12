const {buildSchema} = require('graphql')


module.exports = buildSchema(`
    type Login {
        token: String,
        userId: ID,
        userName: String,
        role: ID,
    }

    type Product {
        _id: ID!,
        price: Float!,
        quantity: Int!,
        name: String!,
        description: String,
        createdAt: String!,
        updatedAt: String!,
        category: ID,
        productInfo: [ID],
        feedback: [ID],
        rating: Float,
        img: [String]
    }

    type ProductFeedback {
        _id: ID!,
        rate: Int!,
        comment: String,
        productId: ID!,
        userId: User,
        createdAt: String,
        updatedAt: String,
    }

    type ProductInfo {
        _id: ID!
        productId: ID
        title: String,
        value: String,
        createdAt: String,
        updatedAt: String,
    }

    type AggrProduct {
        _id: ID!,
        price: Float!,
        quantity: Int!,
        name: String!,
        description: String,
        createdAt: String!,
        updatedAt: String!,
        category: ID,
        productInfo: [ProductInfo],
        feedback: [ProductFeedback],
        rating: Float,
        img: [String]
    }

    type User {
        id: ID!,
        email: String!,
        phone: String,
        password: String!,
        name: String!,
        status: String,
        addres: String,
        role: ID,
        feedback: [ID],
        favorite: ID,
        cart: ID,
        createdAt: String,
        updatedAt: String,
    }

    type Category {
        id: ID!,
        name: String,
        parentId: ID,
        isParent: Boolean,
    }

    type CategoryOrProduct {
        id: ID!,
        name: String!,
        img: [String]
    }

    type Feedback {
        id: ID!,
        rate: Int!,
        comment: String,
        productId: ID!,
        userId: ID!,
        createdAt: String,
        updatedAt: String,
    }

    type Info {
        id: ID!
        productId: ID
        title: String,
        value: String,
        createdAt: String,
        updatedAt: String,
    }

    type AggrFavorite {
        _id: ID!,
        userId: ID!,
        productsIds: [Product]
    }

    type Favorite {
        id: ID!,
        userId: ID,
        productsIds: [ID]
    }

    type Items {
        count: Int!,
        productId: ID!
    }

    input ItemsInput {
        count: Int!,
        productId: ID!
    }
    
    type ItemsCart {
        productId: Product,
        count: Int
    }
    
    type AggrCart {
        _id: ID!,
        userId: ID,
        sumOf: Int,
        totalPrice: Float,
        items: [ItemsCart],
    }

    type Cart {
        id: ID!,
        userId: ID,
        items: [Items]
    }

    type UserOrder {
        userId: ID!,
        phone: String!,
        email: String,
        fullName: String,
        addres: String
    }

    input UserInput {
        userId: ID!,
        phone: String!,
        email: String,
        fullName: String,
        addres: String
    }

    type Order {
        id: ID!,
        status: String,
        isDeliver: Boolean,
        sum: Float,
        number: Int
        items: [Items],
        user: UserOrder,
        createdAt: String,
        updatedAt: String,
    }

    type Query {
        getUser(id: ID!): User!
        allUser: [User!]!

        getProduct(id: ID): AggrProduct
        getProductInCategories(categoryId: ID, sortByRate: Boolean, startPrice: Int, endPrice: Int, skip: Int, limit: Int): [Product]

        searchProductsOrCategories(search: String): [CategoryOrProduct]

        getCategory(id: ID): [Category!]!
        getCategoryByParent(id: ID!): [Category!]!
        
        getFeedback(id: ID): [Feedback!]!
        getFeedbackByProductId(productId: ID!): [Feedback!]!
        getFeedbackByUserId(userId: ID!): [Feedback!]!
        getFeedbackByUserAndProductId(userId: ID!, productId: ID!): Feedback

        getInfo(id: ID): [Info] 
        getProductInfo(productId: ID!): [Info]

        getFavorite(id: ID): [Favorite]
        getFavoriteByUserID(userId: ID): [AggrFavorite]

        getCart(id: ID): [Cart]
        getCartByUserID(userId: ID): AggrCart

        getOrder(id: ID): [Order]
        getOrderByUserId(userId: ID!): [Order]
    }

    type Mutation {
        register(email: String!, password: String, name: String): User!
        login(email: String!, password: String): Login!
        changeUser(id: ID!, email: String!, phone: String, name: String, status: String, addres: String, role: ID): User!
        changeUserPwd(id: ID!, lastPwd: String!, newPwd: String!): User!
        deleteUser(id: ID!): User!
        
        addQuantityToProduct(id: ID!, count: Int!): Product!
        addProduct(price: Float!, quantity: Int, name: String!, category: ID!, description: String, productInfo: [ID], img: [String]): Product!
        changeProduct(id: ID!, price: Float!, quantity: Int, name: String!, category: ID!, description: String, productInfo: ID): Product!
        deleteProduct(id: ID!): Product!

        addCategory(name: String!, parentId: ID, isParent: Boolean!): Category!
        changeCategory(id: ID!, name: String, parentId: ID, isParent: Boolean): Category!
        deleteCategory(id: ID!): Category!
        
        addFeedback(rate: Int!, comment: String, productId: ID!, userId: ID!): Feedback!
        changeFeedback(id: ID!, rate: Int!, comment: String, productId: ID!, userId: ID): Feedback!
        deleteFeedback(id: ID!): Feedback!

        addProductInfo(productId: ID!, title: String!, value: String!): Info
        changeProductInfo(id: ID!, productId: ID, title: String, value: String): Info
        deleteProductInfo(id: ID!): Info

        addToFavorite(userId: ID!, productId: ID!): Favorite
        updateFavorite(id: ID!, productsIds: [ID]): Favorite
        deleteFromFavorite(userId: ID!, productId: ID!): Favorite
        clearFavoriteByUserID(userId: ID!): Favorite

        addToCart(userId: ID!, productId: ID!, count: Int!): Cart
        updateCart(id: ID, items: [ItemsInput!]): Cart
        updateCountOfItemInCart(userId: ID!, productId: ID!, count: Int!): Cart
        deleteFromCart(userId: ID!, productId: ID!): Cart
        clearCartByUserID(userId: ID!): Cart

        createOrder(isDeliver: Boolean!, sum: Float!, items: [ItemsInput!], user: UserInput!): Order
        updateOrderStatus(id: ID!, status: String!): Order
        updateOrder(id: ID!, isDeliver: Boolean, sum: Float, items: [ItemsInput], user: UserInput): Order
        deleteOrder(id: ID!): Order
    }
`)
