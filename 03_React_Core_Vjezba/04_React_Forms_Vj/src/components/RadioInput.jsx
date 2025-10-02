export default function RadioInput({htmlID, inputKey, lable, options, onChange, error}){
    return(
        <div>
            <label htmlFor={htmlID}>{lable}</label>
            <br/>
            {options.map(o => 
                <div key={o.value}>            
                    <input type="radio" value={o.value} id={o.value} name={inputKey} onChange={onChange} />
                    <label htmlFor={o.value}>{o.label}</label>
                </div>
            )}
            {(error.flag === -1) && <h4>{error.message}</h4>}
        </div>
    )
}
