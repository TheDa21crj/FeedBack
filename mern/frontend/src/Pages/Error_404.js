import React from 'react'
import Navbar from "../Components/Navbar";
import Error_backdrop from '../Components/Error_backdrop';
import Error_overlay from '../Components/Error_overlay';

export default function Error_404() {
    return (
        <div>
            <Navbar />
            <Error_backdrop />
            <Error_overlay />
        </div>
    )
}
