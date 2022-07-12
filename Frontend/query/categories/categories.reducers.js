
export const asyncCreateCategory = async (createCategory, value, callback, callbackError) => {
    try{
        await createCategory({
            variables: {
                name: value.name,
                parentId: value.parentId,
                isParent: value.parentId ? false : true
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

export const asyncUpdateCategory = async (updateCategory, value, callback, callbackError) => {
    try{
        console.log('reduser category value', value)
        await updateCategory({
            variables: {
                id: value.id,
                name: value.name,
                parentId: value.parentId,
                isParent: value.id === value.parentId ? true : false
            }
        })
        
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}