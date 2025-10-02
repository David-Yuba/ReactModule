export default function TextInput({htmlID, inputKey, type="text", lable, valuePointer, onChange, error}){
    return(
        <div>
            <label htmlFor={htmlID}>{lable}</label>
            <br/>
            <input value={valuePointer} id={htmlID} type={type} name={inputKey} onChange={onChange} />
            {(error.flag === -1) && <h4>{error.message}</h4>}
        </div>
    )
}
