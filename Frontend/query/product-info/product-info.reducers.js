
export const asyncCreateProductInfo = async (createProductInfo, value, callback, callbackError) => {
    try{
        await createProductInfo({
            variables: {
                productId: value.productId,
                title: value.title,
                value: value.value,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

export const asyncUpdateProductInfo = async (updateProductInfo, value, callback, callbackError) => {
    try{
        await updateProductInfo({
            variables: {
                id: value.id,
                productId: value.productId,
                title: value.title,
                value: value.value,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}