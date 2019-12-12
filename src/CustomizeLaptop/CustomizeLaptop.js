import React from 'react';
import './CustomizeLaptop.css'

export default function CustomizeLaptop(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {props.features}
        </form>
    )
};   

