import React from "react";
import Card from "./Card";

const Form=()=>{
    return(
        <Card>
        <form id="info-form">
            <h3>Form Layout Only</h3>
            <label htmlFor="full_name">Full Name</label>
            <input id="full_name" type="text"/><br></br>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"/><br></br>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/><br></br>
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input id="password_confirmation" type="password"/><br></br>
            <button id="submit">Submit</button>
        </form>
        </Card>
    )
}

export default Form;