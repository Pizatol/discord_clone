import "../styles/globals.css";
import { LoginContext } from "../context/LoginContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(null);
    const [formOn, setFormOn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <LoginContext.Provider
            value={{
                user,
                setUser,
                formOn,
                setFormOn,
                userName,
                setUserName,
                darkMode,
                setDarkMode,
            }}
        >
            <Component {...pageProps} />;
        </LoginContext.Provider>
    );
}

export default MyApp;
