import React from 'react'

export const ButtonSimple = ({ bgColor, text, icon }) => {

    // console.log(props.bgColor)
    // console.log(props.text)
    // console.log(props.icon)

    // const { bgColor, text, icon } = props

    return (
        <button className={`btn btn-${bgColor ? bgColor : "dark"}`}><i className={`${icon} me-2`}></i>{text ? text : "Write Text"}</button>
    )
}