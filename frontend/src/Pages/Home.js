import React from "react";
import H_css from "./Home.module.css"
import Navbar from "../Components/Navbar";

export default function Home() {
    return <div>
        <Navbar />
        <div className={H_css.m_div}>
            <div className={H_css.text}>
                <h4>Welcome</h4>
                <h1>We Are MERN Developers</h1>
            </div>
        </div>
    </div>
}
