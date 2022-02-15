import React from "react";
import Navbar from "../Components/Navbar";
import Contact_side_top_div from "../Components/Contact_side_top_div";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import Contact_us from "../Components/Contact_us"
import Contact_css from "./Contact.module.css";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className={Contact_css.div_side}>
                <Contact_side_top_div
                    icon={<PhoneAndroidIcon />}
                    title_div="Phone"
                    details="+91 9939197376"
                />
                <Contact_side_top_div
                    icon={<MailIcon />}
                    title_div="Email"
                    details="rishavrajcrj@gmail.com"
                />
                <Contact_side_top_div
                    icon={<RoomIcon />}
                    title_div="Address"
                    details="Qt No.- 2A, St No.- 70 , CRJ-713331"
                />
            </div>
            <Contact_us />
        </div>
    );
}
