import React from "react";


export const Header  = () => {

        return(
            <>
            <h1 style={{color: "#eda212" , fontSize:'36px', textAlign: "center", textTransform:"uppercase" , fontFamily: 'cursive'}} className='title'>_ Fast React Pizza Co _</h1>
            </>
        )
    }

    
    export const Subheader  = () => {

        return(
            <div style={{display:'flex', justifyContent:'center'}}>
            <h1 style={{width:'50%',color: "black" , fontSize:'26px', textAlign: "center", textTransform:"uppercase" , borderBottom: "1px solid #eda212" , }} className='title'>our menu</h1>
            </div>
        )
    }

    



// export default {Header, Subheader}