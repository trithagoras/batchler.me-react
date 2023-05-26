export const darkModeSaved = () => localStorage.getItem("DarkMode") !== null;
export const darkModeClass = () => darkModeSaved() ? "dark-mode" : "";