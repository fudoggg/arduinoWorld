import { useState } from "react";

export default function useObject(initializationValue = {}) {
    const [value, setValue] = useState(initializationValue)

    const changeValue = (newValue) => {
        setValue(old => ({...old, ...newValue}))
    }
    
    return {
        value, changeValue
    }
}