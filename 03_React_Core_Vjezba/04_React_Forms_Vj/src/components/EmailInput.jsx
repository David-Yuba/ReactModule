export default function EmailInput({htmlID, inputKey, type="text", lable, valuePointer, onChange, error}){
    return(
        <div>
            <label htmlFor={htmlID}>{lable}</label>
            <br/>
            <input value={valuePointer} id={htmlID} type={type} name={inputKey} onChange={onChange} />
            {(error.exists.flag === -1) && <h4>{error.exists.message}</h4>}
            {(error.validEmail.flag === -1) && <h4>{error.validEmail.message}</h4>}
        </div>
    )
}
