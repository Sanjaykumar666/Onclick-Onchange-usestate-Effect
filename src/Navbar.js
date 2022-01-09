import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="Navbar">
                <ul>
                    <li>
                        <Link to="/Concept"> Concept</Link>
                    </li>
                    <li>
                        <Link to="/Welcome">Welcome</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}