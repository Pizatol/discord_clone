import React from 'react'
import css from "../../styles/Components/Buttons/Button_glow.module.scss"
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
export default function Button_glow(props) {

  const { darkMode, setDarkMode } = useContext(LoginContext);
  return (
	 <button
     className={
                darkMode
                    ? css.button
                    : css.button_white
            }
   
     >{props.name} </button>
  )
}
