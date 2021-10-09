import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import About_p_content from "../Components/About_p_content";
import Navbar from "../Components/Navbar";

export default function About() {
  const history = useHistory();
  const clasAboutPage = async () => {
    try {
      const res = await fetch("/abouts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
  useEffect(() => {
    clasAboutPage();
  });
  return (
    <div>
      <Navbar />
      <About_p_content
        img_src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        user_name="Hello World!"
        ratings="3"
      />
    </div>
  );
}
