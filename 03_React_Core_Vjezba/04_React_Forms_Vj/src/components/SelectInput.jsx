export default function TextAreaInput({htmlID, inputKey, lable, options, valuePointer, onChange, error}){
    
    return(
        <div>
            <label htmlFor={htmlID}>{lable}</label>
            <br/>
            <select name={inputKey} value={valuePointer} onChange={onChange}>
                <option value="">-- Odaberite Grad --</option>
                {options.map((option,i) => (
                    <option key={i} value={option.value}>{option.text}</option>
                ))}
            </select>
            {(error.flag === -1) && <h4>{error.message}</h4>}
        </div>
    )
}