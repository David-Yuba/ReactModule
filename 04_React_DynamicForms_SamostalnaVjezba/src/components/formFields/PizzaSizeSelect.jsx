export default function PizzaSizeSelect({HTMLid, name, options,label, valueSet, errorPointer, errorSet }){

    function updateValue(e){
        valueSet((v)=>({...v, [e.target.name]: e.target.value}));
        if(e.target.value == "0") errorSet((er) => (er.pizzaSize.includes("Size is required")) ?
            ({...er, pizzaSize: [...er.pizzaSize]}) :
            ({...er, pizzaSize: [...er.pizzaSize, "Size is required"]})); 
        else errorSet((er) =>({...er, pizzaSize: []}));
    }
    return (
        <div>
            <label htmlFor={HTMLid}>{label}</label>
            <select id={HTMLid} name={name} onChange={updateValue}>
                <option value={0}>-- Select pizza size --</option>
                {options.map((o)=>
                    <option key={o.value} value={o.value}>{o.label}</option>    
                )}
            </select>
            <div>
                {errorPointer.map((error) => (<p style ={{color: "red"}} key={(error)}>{error}</p>))}
            </div>
        </div>
    )
}