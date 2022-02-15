import React from "react";
import C_s_div_css from "./Contact_side_top_div.module.css";

export default function Contact_side_top_div(props) {
  return (
    <div className={C_s_div_css.C_d_m_c}>
      <div className={C_s_div_css.icon}>{props.icon}</div>
      <div className={C_s_div_css.text_div}>
        <h3>{props.title_div}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
}
