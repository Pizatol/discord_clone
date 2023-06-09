import Head from "next/head";
import Image from "next/image";

import css from "../styles/Home.module.css";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Leftbar from "../Components/Leftbar";
import Wall from "../Components/Wall";

export default function Home() {
    const { darkMode } = useContext(LoginContext);

    return (
        <div
            className={
                darkMode
                    ? `${css.global_container} ${css.darkMode}`
                    : `${css.global_container} ${css.lightMode}`
            }
        >
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={css.container}>
                <Leftbar />
                <Wall />
            </div>
        </div>
    )
}
