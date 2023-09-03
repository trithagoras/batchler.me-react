import { action, makeObservable, observable } from "mobx";

export class ThemeStore {
    darkMode = false;

    constructor() {
        makeObservable(this, {
            darkMode: observable,
            toggleDarkMode: action,
            initialize: action
        });
        this.initialize();
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem("DarkMode", this.darkMode ? "1" : "0");
    }

    initialize() {
        this.darkMode = localStorage.getItem("DarkMode") === "1";
    }
}