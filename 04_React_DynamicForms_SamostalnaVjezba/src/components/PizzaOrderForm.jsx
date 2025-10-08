import { useState } from "react";

import FullNameInput from "./formFields/FullNameInput";
import AdressInput from "./formFields/AdressInput";
import PizzaSizeSelect from "./formFields/PizzaSizeSelect";
import PizzaDoughRadio from "./formFields/PizzaDoughRadio";
import ExtrasCheckboxInput from "./formFields/ExtrasCheckboxInput";
import NoteTextarea from "./formFields/NoteTextarea";
import PhoneNumberInput from "./formFields/PhoneNumberInput";

export default function PizzaOrderForm(){
    
    const pizzaSizeOptions = [
    {
        label: "Small",
        value: "S"
    },
    {
        label: "Medium",
        value: "M"
    },
    {
        label: "Large",
        value: "L"
    }]
    const pizzaDoughOptions = [
        {
            label: "Thin",
            value: 0
        },
        {
            label: "Classic",
            value: 1
        },
        {
            label: "Filled",
            value: 2
        },
    ]
    const extrasOptions = [
        {
            label: "Mushrooms",
            include: 0
        },
        {
            label: "Cheese",
            include: 0
        },
        {
            label: "Ham",
            include: 0
        },
        {
            label: "Olives",
            include: 0
        },
        {
            label: "Corn",
            include: 0
        },
    ]
    const [formValues, setFormValues] = useState({
        fullName: "",
        adress: "",
        pizzaSize: "",
        pizzaDough: "",
        extras: extrasOptions,
        note: "",
        phoneNumber: 0
    });

    const [errorValues, setErrorvalues] = useState({
        fullName: [],
        adress: [],
        pizzaSize: [],
        pizzaDough: [],
        extras: [],
        note: [],
        phoneNumber: []
    });

    function handleSubmit(e){
        e.preventDefault();
        
        for (const er in errorValues){
            if(errorValues[er].length !== 0) return;
        }
            

        console.log(formValues);
    }
    return (
        <form onSubmit={handleSubmit}>
            <FullNameInput HTMLid ="nameinput" label="Full name: " name="fullName" required={true} valuePointer={formValues.fullName} valueSet={setFormValues} errorPointer={errorValues.fullName} errorSet={setErrorvalues}/>
            <AdressInput HTMLid ="adressinput" label="Adress: " name="adress" required={true} valuePointer={formValues.adress} valueSet={setFormValues} errorPointer={errorValues.adress} errorSet={setErrorvalues}/>
            <PizzaSizeSelect HTMLid ="pizzasizeselect" label="Pizza size: " name="pizzaSize" options={pizzaSizeOptions} required={true} valuePointer={formValues.pizzaSize} valueSet={setFormValues} errorPointer={errorValues.pizzaSize} errorSet={setErrorvalues}/>
            <PizzaDoughRadio HTMLid ="pizzadoughradio" label="Pizza dough: " name="pizzaDough" options={pizzaDoughOptions} required={true} valuePointer={formValues.pizzaDough} valueSet={setFormValues} errorPointer={errorValues.pizzaDough} errorSet={setErrorvalues}/>
            <ExtrasCheckboxInput HTMLid ="extrasscheckboxinput" label="Extras: " name="extras" options={extrasOptions} required={true} valuePointer={formValues.extras} valueSet={setFormValues} errorPointer={errorValues.extras} errorSet={setErrorvalues}/>
            <NoteTextarea HTMLid ="note" label="Note " name="note" required={true} valuePointer={formValues.note} valueSet={setFormValues} errorPointer={errorValues.note} errorSet={setErrorvalues}/>
            <PhoneNumberInput HTMLid ="numberinput" label="Phone number: " name="phoneNumber" required={true} valuePointer={formValues.phoneNumber} valueSet={setFormValues} errorPointer={errorValues.phoneNumber} errorSet={setErrorvalues}/>
            <button type="submit">Submit</button>
        </form>
    )
}