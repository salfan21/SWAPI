import React from 'react';
import { NavLink } from 'react-router-dom';

export const Error = () => {
    return (
        <div style={{color:'inherit', display:'flex',width:'100vw',height:'100%', alignItems:'center', justifyContent:'center'}}>
            <div>
             <h1 style={{textTransform:'uppercase'}}>error 404</h1>   
             <NavLink to={'/'}><h2>return</h2></NavLink>
            </div>
           
        </div>
    );
};

