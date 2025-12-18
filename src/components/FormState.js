import React, { useState } from "react";
import Card from "./Card";

const FormState=()=>{
    const[fullname,setFullname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword,setConfirmpassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log("Full Name:", fullname);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmpassword);

        alert("value logged with usestate");
    } 

    return(
        <Card>
        <form id="info-form" onSubmit={handleSubmit}>
            <h3>Form handling using state</h3>
            <input
            id="full_name"
            value={fullname}
            placeholder="enter fullname"
            onChange={(e)=>setFullname(e.target.value)}
            />
            <input
            id="email"
            value={email}
            placeholder="enter email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            id="password"
            value={password}
            placeholder="enter password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <input
            id="password_confirmation"
            value={confirmpassword}
            placeholder="enter confirmpassword"
            onChange={(e)=>setConfirmpassword(e.target.value)}
            />

            <button id="submit">Submit</button>
        </form>
        </Card>
    )
}

export default FormState;