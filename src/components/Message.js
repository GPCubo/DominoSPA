import React from 'react'
import './Loader.css'
export const Message = ({msg,bgColor}) => {
    let styles={
        padding:"1rem",
        marginBottom:"1rem",
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        backgroundColor: bgColor
    }
    return (
        <div style={styles}>
            <h1>{msg}</h1>
        </div>
    )
}
