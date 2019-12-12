import React from 'react';
import './Total.css'

export default function YourCart(props) {
    return (
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {props.USCurrencyFormat.format(props.total)}
        </div>
      </div>
    )
};  