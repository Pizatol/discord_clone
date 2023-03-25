import React, { useState } from "react";
import css from "../styles/Components/Wall.module.scss";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Wall() {
    const { darkMode } = useContext(LoginContext);

    const [dataText, setDataText] = useState("");

const handleTextSubmit = (e) => {

    if(e.key === 'Enter'){

        setDataText(e)
        console.log(dataText);
    }
}
console.log(dataText);

    return (
        <div className={css.global_container}>
            <div>TEXTES</div>

            <div>
                <textarea
                onKeyDown={(e) => setDataText(e.target.value)}
                    className={
                        darkMode
                            ? `${css.input_text} ${css.darkMode}`
                            : `${css.input_text} ${css.lightMode}`
                    }
                    type="text"
                    placeholder="Envoyer un message"
                />
            </div>
        </div>
    );
}
