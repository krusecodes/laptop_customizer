import React from 'react';
import Total from '../Total/Total'
import './YourCart.css'

export default function YourCart(props) {
    return (
        <section className="main__summary">
        <h2>Your cart</h2>
        {props.summary}
        <Total 
        USCurrencyFormat={props.USCurrencyFormat}
        total={props.total}
        />
      </section>
    )
};  