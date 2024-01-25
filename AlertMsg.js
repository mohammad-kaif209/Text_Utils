import React from 'react';
function Alert(props) {
    const firstchar = (Word)=>{
        return (Word.charAt(0).toUpperCase() + Word.slice(1)); 
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{firstchar(props.alert.type)} : </strong>{props.alert.msg}
        </div>
    )
}
export default Alert;
