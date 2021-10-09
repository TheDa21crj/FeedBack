import React from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LockIcon from "@material-ui/icons/Lock";
import R_f_css from "./Registration_form.module.css";

export default function Registration_form() {
  const history = useHistory();

  let user_data = {
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    c_password: "",
  };
  function Register_fun(e) {
    const n = document.getElementById("name").value;
    const em = document.getElementById("email").value;
    const p = document.getElementById("phone").value;
    const pro = document.getElementById("profession").value;
    const pass = document.getElementById("password").value;
    const c_pass = document.getElementById("c_password").value;
    user_data = {
      name: n,
      email: em,
      phone: p,
      profession: pro,
      password: pass,
      c_password: c_pass,
    };
    console.log(user_data);
  }

  const Post_fun = async (e) => {
    // e.preventDefault();
    const { name, email, phone, profession, password, c_password } = user_data;

    fetch("http://localhost:8000/register").then((res) => console.log(res));

    const r = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        profession,
        password,
        c_password,
      }),
    });
    const data = await r.json();

    if (!data.status) {
      alert("Registration Done");
      console.log("Registration Done");
      history.push("/login");
    } else {
      alert("Invalid Registration");
      console.log("Invalid Registration");
    }
  };
  return (
    <div className={R_f_css.form_m_div}>
      <div className={R_f_css.left_div}>
        <h2>Sign Up</h2>
        <form method="POST">
          <div className={R_f_css.label_input_div}>
            <label htmlFor="name">
              <PersonIcon />
            </label>
            <input
              // value={user_data.name}
              // onChange={Ch_fun}
              type="text"
              name="name"
              placeholder="Your Name"
              id="name"
            />
          </div>
          <div className={R_f_css.label_input_div}>
            <label htmlFor="email">
              <EmailIcon />
            </label>
            <input
              // value={user_data.email}
              // onChange={Ch_fun}
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              id="email"
            />
          </div>
          <div className={R_f_css.label_input_div}>
            <label htmlFor="phone">
              <CallIcon />
            </label>
            <input
              // value={user_data.phone}
              // onChange={Ch_fun}
              type="number"
              name="phone"
              id=""
              placeholder="Your Phone"
              id="phone"
            />
          </div>
          <div className={R_f_css.label_input_div}>
            <label htmlFor="profession">
              <AssignmentIndIcon />
            </label>
            <input
              // value={user_data.profession}
              // onChange={Ch_fun}
              type="text"
              name="profession"
              id=""
              placeholder="Your Profession"
              id="profession"
            />
          </div>
          <div className={R_f_css.label_input_div}>
            <label htmlFor="password">
              <LockIcon />
            </label>
            <input
              // value={user_data.password}
              // onChange={Ch_fun}
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
              id="password"
            />
          </div>
          <div className={R_f_css.label_input_div}>
            <label htmlFor="c_password">
              <LockIcon />
            </label>
            <input
              // value={user_data.c_password}
              // onChange={Ch_fun}
              type="password"
              name="c_password"
              id=""
              placeholder="Confirm Password"
              id="c_password"
            />
          </div>
        </form>
        <button
          type="submit"
          className={R_f_css.Reg_btn}
          onClick={() => {
            Register_fun();
            Post_fun();
          }}
        >
          Register
        </button>
      </div>
      <div className={R_f_css.right_div}>
        <video
          autoPlay
          loop
          muted
          className={R_f_css.video}
          src="https://assets.mixkit.co/videos/preview/mixkit-two-coworkers-talking-and-laughing-4872-large.mp4"
        ></video>
        <button type="submit" className={R_f_css.al_r_btn}>
          <Link to="/login" className={R_f_css.Link}>
            I am already registered
          </Link>
        </button>
      </div>
    </div>
  );
}
