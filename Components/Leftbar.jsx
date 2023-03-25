import React from "react";
import css from "../styles/Components/Leftbar.module.scss";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Leftbar() {
    const {
        user,
        setUser,
        formOn,
        setFormOn,
        userName,
        setUserName,
        darkMode,
        setDarkMode,
    } = useContext(LoginContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={
                darkMode
                    ? `${css.global_container} ${css.darkMode}`
                    : `${css.global_container} ${css.lightMode}`
            }
        >
            {darkMode ? (
                <button
                    className={css.buttonDarkTempo}
                    onClick={toggleDarkMode}
                >
                    Light
                </button>
            ) : (
                <button
                    className={css.buttonDarkTempo}
                    onClick={toggleDarkMode}
                >
                    Dark
                </button>
            )}
        </div>
    );
}
