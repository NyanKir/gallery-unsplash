const {useState} = require("react");

export const useLocalStorage=(key, initialValue)=> {
    const [storedValue,setStoredValue]=useState(()=>{
        const  init=window.localStorage.getItem(key)
        return init!=null?JSON.parse(init):window.localStorage.setItem(key,JSON.stringify(initialValue))

    })

    const setValue = (value) => {
        try {

            setStoredValue([...JSON.parse(window.localStorage.getItem(key)),value]);
            window.localStorage.setItem(key, JSON.stringify([...JSON.parse(window.localStorage.getItem(key)),value]));
        } catch (error) {
            console.log(error);
        }
    };


    return [setValue];
}