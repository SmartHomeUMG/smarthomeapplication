import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { NavData } from './NavData';

function Navigation() {

    return (
        <>
            <nav className="Navigation">
                <ul className="NavMenu">
                    {NavData.map((item, index) => {
                        return (
                            <li key={index} className="NavRow">
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                })}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;