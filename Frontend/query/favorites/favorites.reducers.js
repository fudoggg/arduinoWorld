import Cookies from 'js-cookie';

export const asyncAddToFavorite = async (addToFavorite, value, callback, callbackError) => {
    try{
        await addToFavorite({
            variables: {
                userId: Cookies.get('userId'),
                productId: value.productId,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

export const asyncDeleteFromFavorite = async (deleteFromFavorite, value, callback, callbackError) => {
    try{
        await deleteFromFavorite({
            variables: {
                userId: Cookies.get('userId'),
                productId: value.productId,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

// export const asyncUpdateProduct = async (updateProduct, value, callback, callbackError) => {
//     try{
//         await updateProduct({
//             variables: {
//                 id: value.id,
//                 name: value.name,
//                 price: Number(value.price),
//                 quantity: Number(value.quantity),
//                 category: value.category,
//                 description: value.description,
//             }
//         })
//         alert('Товар успешно обновлен')
//         callback?.()
//     }catch (e) {
//         callbackError?.()
//         console.log(e)
//     }
// }