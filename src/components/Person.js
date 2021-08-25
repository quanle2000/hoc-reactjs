import React from 'react';
import './person.css';

const Person = (props) =>{
    const styles ={
        color:'black',
        
    }
    return (
        <div className = "style">
        <input style = {styles} type = 'text' onChange = {props.changed}></input>
        <p onClick = {props.click } style = {styles}>hello {props.name} i'm {props.age} years old ! </p>
        </div>

    );
};
export default Person;