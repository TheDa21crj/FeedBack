import React from 'react'
import A_content from "./About_p_content.module.css"

export default function About_p_content(props) {
    function Timeline_fun(e) {
        const t = document.getElementById("t_line");
        const a = document.getElementById("ab_div")
        // document.getElementById(id).style.property = new style
        t.style.opacity = "1";
        t.style.pointerEvents = "auto";
        a.style.opacity = "0";
        a.style.pointerEvents = "none";
        console.log(e.target);
        console.log(t);
    }

    function Ab_fun(e) {
        const t = document.getElementById("t_line");
        const a = document.getElementById("ab_div")
        t.style.opacity = "0";
        t.style.pointerEvents = "none";
        a.style.opacity = "1";
        a.style.pointerEvents = "auto";
        console.log(e.target)
    }
    return (
        <div className={A_content.a_c_m_div}>
            <div className={A_content.left_div}>
                <img
                    className={A_content.img}
                    src={props.img_src}
                    alt=""
                    srcset=""
                />
                <div className={A_content.p_div}>
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                    <p>{props.p3}</p>
                    <p>{props.p4}</p>
                    <p>{props.p5}</p>
                    <p>{props.p6}</p>
                    <p>{props.p8}</p>
                    <p>{props.p9}</p>
                    <p>{props.p10}</p>
                    <p>{props.p11}</p>
                    <p>{props.p12}</p>
                </div>
            </div>
            <div className={A_content.right_div}>
                <h3>{props.user_name}</h3>
                <h5>Web Developer</h5>
                <p>Ratings:</p>
                <span>{props.ratings}</span>
                <span>/10</span>
                <button type="submit" className={A_content.btn}>Edit Profile</button>
                <div className={A_content.ab_tl_div}>
                    <p onClick={Ab_fun} className={A_content.poi}>About</p>
                    <p onClick={Timeline_fun} className={A_content.poi}>Timeline</p>
                    <div className={A_content.input_p_div} id="ab_div" >
                        <div className={A_content.label_div}>
                            <p>User Id</p>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone Number</p>
                            <p>Profession</p>
                        </div>
                        <div className={A_content.input_div}>
                            <form action="">
                                <input type="text" name="id" className={A_content.input} value="ybctranswxowoq" />
                                <input type="text" name="name" className={A_content.input} value="Hello World" />
                                <input type="email" name="email" className={A_content.input} value="the@da.com" />
                                <input type="number" name="number" className={A_content.input} value="9987993561" />
                                <input type="text" name="profession" className={A_content.input} value="Wev Dev" />
                            </form>
                        </div>
                    </div>
                    <div className={A_content.timeline_div} id="t_line">
                        <div className={A_content.label_div}>
                            <p>Experience</p>
                            <p>Hourly Rate</p>
                            <p>Total Projects</p>
                            <p>Languages</p>
                            <p>Availability</p>
                        </div>
                        <div className={A_content.input_div}>
                            <form action="">
                                <input type="text" name="experience" className={A_content.input} value="Begineer" />
                                <input type="text" name="rate" className={A_content.input} value="3$/hour" />
                                <input type="number" name="project" className={A_content.input} value="21" />
                                <input type="text" name="Lang" className={A_content.input} value="C++, Java, JS, C, Py" />
                                <input type="text" name="profession" className={A_content.input} value="9 months" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
