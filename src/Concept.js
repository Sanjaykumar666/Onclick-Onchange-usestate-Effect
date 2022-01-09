import React, { useEffect, useState } from "react";

export default function Concept() {
    const [username, setUsername] = useState("Type Here....");

    useEffect(() => {
        setTimeout(() => {
            setUsername("you have been successfully clicked")
        }, 5000)
    })

    const handelClick = () => {
        setUsername("loading....")
    }
    const handelChange = (e) => {

        setUsername(e.target.value)
    }

    return (
        <React.Fragment>
            <div className="btn">
                <input type="text" onChange={handelChange} />
                <button onClick={handelClick} >change</button>
                <h1>{username}</h1>
            </div>
        </React.Fragment>
    )
}
