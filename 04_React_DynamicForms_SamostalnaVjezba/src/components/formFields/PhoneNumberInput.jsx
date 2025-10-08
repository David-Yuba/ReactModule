export default function PhoneNumberInput({HTMLid, label, name, required, valuePointer, valueSet, errorPointer, errorSet}){

    function updateValue(e){
        valueSet((v)=>({...v, [e.target.name]: e.target.value}));
        let errors = errorPointer;
        let errorFlag = 0;
        console.log(Number(e.target.value),isNaN(Number(e.target.value)));
        if(isNaN(Number(e.target.value))){
            errors = (errors.includes("Enter a valid number")) ?
                [...errors] :
                [...errors, "Enter a valid number"];
            errorFlag = 1;
        } 
        else 
            errors = (errors.includes("Enter a valid number")) ?
                errors.filter((v) => v !== "Enter a valid number") :
                [...errors];
        if(e.target.value.length < 4){ 
            errors = (errors.includes("Number has to be at least 9 digit")) ?
                [...errors] :
                [...errors, "Number has to be at least 9 digit"];
            errorFlag = 1;
        }
        else 
            errors = (errors.includes("Number has to be at least 9 digit")) ?
                errors.filter((v) => v !== "Number has to be at least 9 digit") :
                [...errors];
        console.log(errors)
        if(errorFlag === 0) errorSet((er) =>({...er, phoneNumber: []}));
        else errorSet((er) =>({...er, phoneNumber: errors}));
    }
    return (
        <div>
            <label htmlFor={HTMLid}>{label}</label>
            <input id={HTMLid} type="text" value={valuePointer} name={name} required={required ? true : false} onChange={updateValue}></input>
            <div>
                {errorPointer.map((error) => (<p style ={{color: "red"}} key={(error)}>{error}</p>))}
            </div>
        </div>
    )
}