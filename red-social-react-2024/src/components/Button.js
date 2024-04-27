import React from 'react';

// const Button = (props) => (
//     <a href={props.hash} className={ props.className } >
//         { props.content }
//     </a >
// )

const Button = props => {
    return (
        <button type={props.type} className={props.className}> {props.content} </button>
    )
}

export default Button;