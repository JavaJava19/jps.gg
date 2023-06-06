import React from 'react'

const StatsParts = ({ icon, name, value }) => {
    const fieldStyle = {
        position: "relative",
        width: "40%",
        display: "flex",
        marginTop: "5px"
    }
    const iconStyle = {
        fontSize: "32px"
    }
    const nameStyle = {
        marginLeft: "10px",
        fontSize: "14px"
    }
    const valueStyle = {
        position: "absolute",
        top: "19px",
        left: "42px",
        fontSize: "12px"
    }
    return (
        <div style={fieldStyle}>
            <div style={iconStyle}>
                {icon}
            </div>
            <div style={nameStyle}>
                {name}
            </div>
            <div style={valueStyle}>
                {value}
            </div>
        </div>
    )
}

export default StatsParts
