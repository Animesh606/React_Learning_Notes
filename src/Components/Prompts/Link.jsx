import React from "react"

const Link = (promp) => {
    return (<a href={promp.link} target="_blank">{promp.name}</a>)
}

export default Link;