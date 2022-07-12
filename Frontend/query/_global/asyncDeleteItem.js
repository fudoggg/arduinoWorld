
export const asyncDeleteItem = async (mutation,id,callback) => {
    try {
        await mutation({
            variables: {
                id: id
            }
        })
        callback?.()
    }catch (e) {
        alert(e.message || 'Произошла ошибка , попробуйте позже')
    }
}

