import React from "react";
import { Link, useHistory } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import L_f_css from "./Login_f.module.css";

export default function Login_f() {
  const history = useHistory();
  let sign_data = {
    email: "",
    password: "",
  };

  function login_fun(e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    sign_data = {
      email: email,
      password: password,
    };
    console.log(sign_data);
  }

  const Post_login_fun = async (e) => {

    const { email, password } = sign_data;
    fetch("http://localhost:8000/signin").then((res) => console.log(res));
    const r = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await r.json();

    if (!data.status) {
      alert("Sign-In Done");
      console.log("Sign Done");
      history.push("/");
    } else {
      alert("Invalid Sign-In");
      console.log("Invalid Sign-In");
    }
    console.log(email);
  }
  return (
    <div className={L_f_css.L_p_f_m_c}>
      <div className={L_f_css.left_div}>
        <img
          src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_1280.jpg"
          alt=""
          srcset=""
          className={L_f_css.img_user}
        />
        <button type="submit" className={L_f_css.al_r_btn}>
          <Link to="/register" className={L_f_css.Link}>
            Create an Account
          </Link>
        </button>
      </div>
      <div className={L_f_css.right_div}>
        <h1>Sign In</h1>
        <form action="" className={L_f_css.form_part}>
          <div>
            <label htmlFor="email">
              <EmailIcon />
            </label>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">
              <LockIcon />
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              id="password"
            />
          </div>
        </form>
        <button
          type="submit"
          className={L_f_css.btn}
          onClick={() => {
            login_fun();
            Post_login_fun();
          }}
        >
          Log In
        </button>
        <div className={L_f_css.other_op}>
          <span className={L_f_css.other_op_text}>Or Log-in with</span>
          <FacebookIcon />
          <TwitterIcon />
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
}
