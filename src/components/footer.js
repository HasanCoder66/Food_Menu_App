import React from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return(
        <>
            <p style={{textAlign:'center'}}>We are open until 01:00, Come visit us or order online </p>
        <div style={{display:'flex', justifyContent:'center'}}>
        <button style={{ backgroundColor:'#eda212', color:'white', width:'13vw', padding:'15px 0px' ,borderRadius:'20px'}} className="btn">Order Now</button>
        </div>
        </>
    )
}

export default Footer