export default function TextAreaInput({htmlID, inputKey, lable, valuePointer, onChange, error}){
    
    return(
        <div>
            <label htmlFor={htmlID}>{lable}</label>
            <br/>
            <textarea value={valuePointer} id={htmlID} name={inputKey} onChange={onChange} />
            {(error.flag === -1) && <h4>{error.message}</h4>}
        </div>
    )
}