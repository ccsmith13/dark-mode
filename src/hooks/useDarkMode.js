import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage('darkModeEnabled', false);

    useEffect(() => {
        useLocalStorage.getItem(key) ?
            document.getElementsByName("body").className = "dark-mode" :
            document.getElementsByName("body").classList.remove("dark-mode");
    }, [darkModeOn]);

    return ([darkmodeOn, setDarkModeOn]);
}