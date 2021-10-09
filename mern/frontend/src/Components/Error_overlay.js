import React from 'react';
import { Link } from 'react-router-dom';
import E_o_css from "./Error_overlay.module.css";

export default function Error_overlay() {
    return (
        <div className={E_o_css.E_o_m_div}>
            <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
            <p>THE PAGE YOU ARE LOOK FOR MIGHT HAVE BEEN REMOVED HAD ITS CHANGED OR ITS TEMPORARILY <br />UNAVALIBLE</p>
            <button className={E_o_css.e_btn}>
                <Link
                    to="/"
                    className={E_o_css.Link}
                >
                    BACK TO HOME PAGE
                </Link>
            </button>
        </div>
    )
}
