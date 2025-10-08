import { useState } from "react"

export default  function StudentForm({modifyStudents}){
    
    const [formData, setFormdata] = useState({
        id: "",
        name: "",
        age: "",
        active: "",
        grade: ""
    })
    const grades = [1,2,3,4,5];
    function onSubmit(event){
        event.preventDefault();
        let id = Number(window.id);
        id++;
        window.id = id;
        console.log(window.id)
        setFormdata((v) => ({...v, id}))

        modifyStudents(students => [...students, formData].sort((s1,s2) => s1.id < s2.id))
        setFormdata({
            id: "",
            name: "",
            age: "",
            active: "",
            grade: ""
        })
        console.log(formData);
    }

    function onChange(event){

        if(event.target.type === "checkbox") setFormdata(v =>({...v,[event.target.name]: event.target.checked}))
        else setFormdata(v =>({...v,[event.target.name]: event.target.value}))
    }

    return (
        <>
            <h2>Dodaj novog studenta</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Ime:</label>
                    <input type="text" name="name" value={formData.name} onChange={onChange}></input>
                </div>
                <div>
                    <label>Godina:</label>
                    <input type="number" name="age" value={formData.age} onChange={onChange}></input>
                </div>
                <div>
                    <label>Ocjena:</label>
                    <select name="grade" value={formData.grade} onChange={onChange}>
                        <option value={0}>--- Odaberite ocjenu ---</option>
                        {grades.map((g) => 
                            <option key={g} value={g}>
                                {g}
                            </option>)}
                    </select>
                </div>
                <div>
                    <input name="active" value={formData.active} onChange={onChange} id="activeStudent" type="checkbox" />
                    <label htmlFor="activeStudent">Je li student aktivan?</label>
                </div>
                <button type="submit">Add student</button>
            </form>
        </>
    )
}