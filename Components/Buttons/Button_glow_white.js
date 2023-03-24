import React from 'react'
import css from "../../styles/Components/Buttons/Button_glow.module.scss"
export default function Button_glow_white(props) {
  return (
	 <button className={css.button_white}>{props.name} </button>
  )
}
