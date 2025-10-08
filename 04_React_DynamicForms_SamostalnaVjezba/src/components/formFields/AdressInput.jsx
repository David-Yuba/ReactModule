export default function AdressInput({HTMLid, label, name, required, validation, valuePointer, valueSet, errorPointer, errorSet}){

    function updateValue(e){
        valueSet((v)=>({...v, [e.target.name]: e.target.value}));
        if(!e.target.value.includes(" "))errorSet((er) => (er.adress.includes("Enter a valid address")) ?
            ({...er, adress: [...er.adress]}) :
            ({...er, adress: [...er.adress, "Enter a valid address"]})); 
        else errorSet((er) =>({...er, adress: []}));
    }
    return (
        <div>
            <label htmlFor={HTMLid}>{label}</label>
            <input id={HTMLid} type="text" value={valuePointer} name={name} required={required ? true : false} onChange={updateValue} ></input>
            <div>
                {errorPointer.map((error) => (<p style ={{color: "red"}} key={(error)}>{error}</p>))}
            </div>
        </div>
    )
}