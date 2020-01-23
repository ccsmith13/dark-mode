import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeEnabled', false);

    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add("dark-mode");
        };
        if (darkMode === false && document.body.className) {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    //console.log('dark mode status', darkMode);
    //console.log('body', document.body)
    return ([darkMode, setDarkMode]);
}