import { useState } from "react"

export const useLocalStorage = (key, initialValues) => {
    const[storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValues))
        return initialValues;
    })

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}