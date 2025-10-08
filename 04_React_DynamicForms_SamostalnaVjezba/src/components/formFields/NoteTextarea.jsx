export default function NoteTextarea({HTMLid, label, name, required, valuePointer, valueSet, errorPointer, errorSet}){

    function updateValue(e){
        valueSet((v)=>({...v, [e.target.name]: e.target.value}));
        if(e.target.value.length > 10)errorSet((er) => (er.note.includes("Enter a smaller note")) ?
            ({...er, note: [...er.note]}) :
            ({...er, note: [...er.note, "Enter a smaller note"]})); 
        else errorSet((er) =>({...er, note: []}));
    }
    return (
        <div>
            <label htmlFor={HTMLid}>{label}</label>
            <textarea id={HTMLid} type="text" value={valuePointer} name={name} required={required ? true : false} onChange={updateValue}></textarea>
            <div>
                {errorPointer.map((error) => (<p style ={{color: "red"}} key={(error)}>{error}</p>))}
            </div>
        </div>
    )
}