import { useState } from "react";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";

export default function LoginForm(){
    const [formLoginData, setFormLoginData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        email: {
            exists: {flag: 0, message: "Area is required"},
            validEmail: {flag:0, message: "Enter a valid email"}
        },
        password: {flag: 0, message: "Area is required"},
    })
    function handleChange(event){
        if(event.target.type == "checkbox")
            setFormLoginData({
                ...formLoginData, 
                [event.target.name]: event.target.checked
            });
        else
            setFormLoginData({
                ...formLoginData, 
                [event.target.name]: event.target.value
            });
    }

    function handleSubmit(event){
        event.preventDefault();
        let e = error;
        for( const [key, value] of Object.entries(formLoginData)){
            e = {...e, ...validateExists(key,value, e)};
            if(key === "email") 
                e = {...e, ...validateEmail(key,value, e)};
        }
        setError(e);
        for( const er in e){
            if(e[er].flag === -1 || e[er].flag === 0)return;
        }
        console.log(formLoginData);
        alert("Login successful");
    }

    function validateExists(key, value, error){
        if(key === "email"){
            if(value === "" || value === false || value === null || value === undefined) 
                return ({...error, [key]: {...error[key], exists: {flag: -1, message: "Area is required"}}});
            else  
                return {...error, [key]: {...error[key], exists: {flag: 1, message: "Area is required"}}}
        }
        else{
            if(value === "" || value === false || value === null || value === undefined) 
                return ({...error, [key]: {...error[key], flag: -1}});
            else  
                return {...error, [key]: {...error[key], flag: 1}}
        }
    }
    function validateEmail(key, value, error){
        if(!value.includes("@")) 
            return ({...error, [key]: {...error[key], validEmail: {flag: -1, message: "Email invalid"}}});
        else  
            return {...error, [key]: {...error[key], validEmail: {flag: 1, message: "Email invalid"}}}
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <EmailInput error={error.email} htmlID="email" inputKey="email" lable="Email" valuePointer={formLoginData.email} onChange={handleChange}/>
            <TextInput error={error.password} htmlID="pass" type="password" inputKey="password" lable="Password " valuePointer={formLoginData.password} onChange={handleChange}/>
            <button type="submit">Register</button>
        </form>
    )
}