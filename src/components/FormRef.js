import React from "react";
import Card from "./Card"
import { useRef } from "react";

const FormRef=()=>{
    const fullnameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmpasswordRef=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log("Full Name:", fullnameRef.current.value);
        console.log("Email:", emailRef.current.value);
        console.log("Password:", passwordRef.current.value);
        console.log("Confirm Password:", confirmpasswordRef.current.value);

        alert("value logged with useREf");
    }

    return(
        <Card>

        <form id="info-form" onSubmit={handleSubmit}>
            <h3>Form handling using userREF</h3>
            <input
            id="full_name"
            ref={fullnameRef}
            placeholder="enter fullname"
            />
            <input
            id="email"
            ref={emailRef}
            placeholder="enter email"
            />
            <input
            id="password"
            placeholder="enter password"
            ref={passwordRef}
            />
            <input
            id="password_confirmation"
            placeholder="enter confirmpassword"
            ref={confirmpasswordRef}
            />

            <button id="submit">Submit</button>
        </form>
        </Card>
    )
}

export default FormRef;