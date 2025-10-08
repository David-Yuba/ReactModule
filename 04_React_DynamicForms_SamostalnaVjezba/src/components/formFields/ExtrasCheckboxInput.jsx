export default function ExtrasCheckboxInput({HTMLid, name, options,label, valuePointer, valueSet}){

    function updateValue(e){
        let ex = valuePointer;
        if(ex[parseInt(e.target.id)].include == 1) 
            ex[parseInt(e.target.id)].include = 0;
        else ex[parseInt(e.target.id)].include = 1;

        valueSet((v) => ({...v, extras: ex}));
    }
    return (
        <div>
            <label htmlFor={HTMLid}>{label}</label>
                {options.map((o, index)=><div key={o.value}>
                        <label htmlFor={o.value}>{o.label}</label>
                        <input name={name} id={index} type="checkbox" onChange={updateValue}  value={o.value}/>   
                    </div>
                )}
        </div>
    )
}