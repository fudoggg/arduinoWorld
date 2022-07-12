
// import Cookies from 'js-cookie';

// export const asyncAddToCart = async (addToCart, value, callback, callbackError) => {
//     try{
//         await addToCart({
//             variables: {
//                 userId: Cookies.get('userId'),
//                 productId: value.productId,
//                 count: value.count || 1,
//             }
//         })
//         callback?.()
//     }catch (e) {
//         callbackError?.()
//         console.log(e)
//     }
// }

// export const asyncDeleteFromCart = async (deleteFromCart, value, callback, callbackError) => {
//     try{
//         await deleteFromCart({
//             variables: {
//                 userId: Cookies.get('userId'),
//                 productId: value.productId,
//             }
//         })
//         callback?.()
//     }catch (e) {
//         callbackError?.()
//         console.log(e)
//     }
// }

// export const asyncClearCartByUserID = async (clearCartByUserID, value, callback, callbackError) => {
//     try{
//         await clearCartByUserID({
//             variables: {
//                 userId: Cookies.get('userId'),
//             }
//         })
//         callback?.()
//     }catch (e) {
//         callbackError?.()
//         console.log(e)
//     }
// }

export const asyncCreateOrder = async (createOrder, value, callback, callbackError) => {
    try{
        await createOrder({
            variables: {
                isDeliver: value.isDeliver,
                sum: value.sum,
                user: value.user,
                items: value.items,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

// // export const asyncUpdateProduct = async (updateProduct, value, callback, callbackError) => {
// //     try{
// //         await updateProduct({
// //             variables: {
// //                 id: value.id,
// //                 name: value.name,
// //                 price: Number(value.price),
// //                 quantity: Number(value.quantity),
// //                 category: value.category,
// //                 description: value.description,
// //             }
// //         })
// //         alert('Товар успешно обновлен')
// //         callback?.()
// //     }catch (e) {
// //         callbackError?.()
// //         console.log(e)
// //     }
// // }