export default function PizzaDoughRadio({HTMLid, name, options,label, required, valuePointer, valueSet, errorPointer, errorSet }){

    function updateValue(e){
        valueSet((v)=>({...v, [e.target.name]: e.target.value}));
    }
    return (
        <div>
            <label htmlFor={HTMLid}>{label}</label>
                {options.map((o)=><div key={o.value}>
                        <label htmlFor={o.value}>{o.label}</label>
                        <input name={name} id={o.value} type="radio" value={o.value} onChange={(updateValue)}/>   
                    </div>
                )}
        </div>
    )
}