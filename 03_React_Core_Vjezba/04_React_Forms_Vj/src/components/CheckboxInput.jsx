export default function CheckboxInput({htmlID, inputKey, lable, valuePointer, onChange, error}){
    
    return(
        <div>
            <label htmlFor={htmlID}>
                <input type="checkbox" name={inputKey} value={valuePointer} id={htmlID} onChange={onChange}/>
                {lable}
            </label>
            {(error.flag === -1) && <h4>{error.message}</h4>}
        </div>
    )
}