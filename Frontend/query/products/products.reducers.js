
import { sendFilesToServer } from './../_global/sendFilesToServer';

export const asyncCreateProduct = async (createProduct, value, file, callback, callbackError) => {
    try{
        const img = await sendFilesToServer(file)

        await createProduct({
            variables: {
                name: value.name,
                price: Number(value.price),
                quantity: Number(value.quantity),
                category: value.category,
                description: value.description,
                img: [img],
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

export const asyncUpdateProduct = async (updateProduct, value, callback, callbackError) => {
    try{
        await updateProduct({
            variables: {
                id: value._id,
                name: value.name,
                price: Number(value.price),
                quantity: Number(value.quantity),
                category: value.category,
                description: value.description,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}