import React from 'react'
import C_u_css from "./Contact_us.module.css"

export default function Contact_us() {
    return (
        <div className={C_u_css.C_u_m_div}>
            <h2>Get in Touch</h2>
            <form action="" className={C_u_css.Form_part}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" className={C_u_css.inp2} />
                <input type="number" placeholder="Your phone number" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className={C_u_css.txtar} />
                <button type="submit" className={C_u_css.Reg_btn}>Send Message</button>
            </form>
        </div >
    )
}
