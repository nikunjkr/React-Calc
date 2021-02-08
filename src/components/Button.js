import React from 'react';
import './Button.css';
const isOperator = val => {
    return val==='+' || val==='-' || val==='*' || val ==='/'|| val==='=';
};
const isClear =val =>{
    return val==='clear'
}
export const Button = props => (
    <div 
    className = {`button ${
        isOperator(props.children) ? 'operator' :isClear(props.children) ? 'clear': null}
    }`}
    onClick = {() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)