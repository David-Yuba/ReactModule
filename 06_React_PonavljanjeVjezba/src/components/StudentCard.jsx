export default  function StudentCard({students,studentInfo, modifyStudent, children}){


    function checkForBestStudent(){
        return students.sort((s1,s2) => s1.grade < s2.grade)[0];
    }

    function deleteStudent(event){
        modifyStudent(event, studentInfo)
    }
    return (
        <div className="card">
            <h2>{studentInfo.name}</h2>
            <p>Godine: {studentInfo.age}</p>
            <p>Ocjena: {studentInfo.grade}</p>
            <label>
                Status: {studentInfo.active ? "Aktivan" : "Neaktivan"}
                <input type="checkbox" checked={Boolean(studentInfo.active)} onChange={(e) => modifyStudent(e,studentInfo)}></input>
            </label>
            <p>{studentInfo.id === checkForBestStudent().id && "Najbolji student"}</p>
            <p>Opis: {children}</p>
            <button type="button" onClick={deleteStudent}>Delete</button>
        </div>
    )
}