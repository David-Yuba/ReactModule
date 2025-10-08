
export default function FullNameInput({HTMLid, label, name, required, validation, valuePointer, valueSet, errorPointer, errorSet}){

    function updateValue(e){
        valueSet((v)=>({...v, [e.target.name]: e.target.value}));
        if(!e.target.value.includes(" "))errorSet((er) => (er.fullName.includes("Enter a valid name")) ?
            ({...er, fullName: [...er.fullName]}) :
            ({...er, fullName: [...er.fullName, "Enter a valid name"]})); 
        else errorSet((er) =>({...er, fullName: []}));
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