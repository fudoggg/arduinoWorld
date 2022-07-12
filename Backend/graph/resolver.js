const resolverUser = require('../api/user/resolver')
const resolverProduct = require('../api/products/resolver')
const resolverOrder = require('../api/orders/resolver')
const resolverFeedback = require('../api/feedback/resolver')
const resolverFavorite = require('../api/favorite/resolver')
const resolverCategories = require('../api/categories/resolver')
const resolverCart = require('../api/cart/resolver')
const resolverInfo = require('../api/product-info/resolver')


module.exports = {
    ...resolverUser,
    ...resolverProduct,
    ...resolverOrder,
    ...resolverFeedback,
    ...resolverFavorite,
    ...resolverCategories,
    ...resolverCart,
    ...resolverInfo,
}
