import { useState } from "react";
import TextInput from "./TextInput";
import TextAreaInput from "./TextareaInput";
import SelectInput from "./SelectInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";

export default function RegFormContainer(){
    const [formRegistrationData, setFormRegistrationData] = useState({
        name: "",
        about: "",
        city: "",
        sex: "",
        conditions: false
    })
    const [error, setError] = useState({
        name: {flag: 0, message: "Area is required"},
        about: {flag: 0, message: "Area is required"},
        city: {flag: 0, message: "Area is required"},
        sex: {flag: 0, message: "Area is required"},
        conditions: {flag: 0, message: "Area is required"},
    })
    const selectOptions = [
        {value: "ZG", text: "Zagreb"},
        {value: "SP", text: "Split"},
        {value: "VZ", text: "Varaždin"}
    ]
    function handleChange(event){
        if(event.target.type == "checkbox")
            setFormRegistrationData({
                ...formRegistrationData, 
                [event.target.name]: event.target.checked
            });
        else
            setFormRegistrationData({
                ...formRegistrationData, 
                [event.target.name]: event.target.value
            });
    }

    function handleSubmit(event){
        event.preventDefault();
        let e = error;
        for( const [key, value] of Object.entries(formRegistrationData)){
            e = {...e, ...validate(key,value, e)};
        }
        setError(e);
        for( const er in e){
            if(e[er].flag === -1 || e[er].flag === 0)return;
        }
        
        console.log(formRegistrationData);
        alert("Registration successful");
    }

    function validate(key, value,error){
        if(value === "" || value === false || value === null || value === undefined) 
            return ({...error, [key]: {...error[key], flag: -1}});
        else  
            return {...error, [key]: {...error[key], flag: 1}}

    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput error={error.name} htmlID="name" inputKey="name" lable="Full name: " valuePointer={formRegistrationData.name} onChange={handleChange}/>
            <TextAreaInput error={error.about} htmlID="about" inputKey="about" lable="About you:" valuePointer={formRegistrationData.about} onChange={handleChange}/>
            <SelectInput error={error.city}  htmlID="city" inputKey="city" options={selectOptions} lable="Where are you from?" valuePointer={formRegistrationData.city} onChange={handleChange}/>
            <CheckboxInput error={error.conditions} htmlID="conditions" inputKey="conditions" lable="Do you accept terms and conditions?" valuePointer={formRegistrationData.conditions} onChange={handleChange}/>
            <RadioInput error={error.sex} htmlID="sex" inputKey="sex" label="Gender: " options={[{value:"m",label:"Male"},{value:"f",label:"Female"}]} valuePointer={formRegistrationData.sex} onChange={handleChange}/>
            <button type="submit">Register</button>
        </form>
    )
}