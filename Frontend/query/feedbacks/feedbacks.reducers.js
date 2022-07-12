
export const asyncCreateFeedback = async (createFeedback, value, callback, callbackError) => {
    try{
        await createFeedback({
            variables: {
                productId: value.productId,
                userId: value.userId,
                rate: Number(value.rate),
                comment: value.comment,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

export const asyncUpdateFeedback = async (updateFeedback, value, callback, callbackError) => {
    try{
        await updateFeedback({
            variables: {
                id: value.id,
                productId: value.productId,
                userId: value.userId,
                rate: Number(value.rate),
                comment: value.comment,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}