export const useLocalStorage=(key, initialValue)=> {

    const init=window.localStorage.getItem(key)
    init!=null?JSON.parse(init):window.localStorage.setItem(key,JSON.stringify(initialValue))

    const setValue = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return [setValue];
}