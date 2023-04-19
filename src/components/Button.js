import React from 'react';


function Button(props) {
    const isTrader = value => {
         return isNaN(value) && (value !== '.') && (value !== '=' );
    };


    return(
        <div className={`button-container ${isTrader(props.children) ? 'trader' : null }`.trimEnd()} 
        onClick={ () => props.handleClick(props.children)}  >
            {props.children}
        </div>
    );
    
}

export default Button;