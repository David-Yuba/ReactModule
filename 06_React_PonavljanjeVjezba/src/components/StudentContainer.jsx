
import StudentCard from "./StudentCard";

export default  function StudentContainer({students, modifyStudent}){

    return (
        <div className="student-container">
            {students.length === 0 ? <h2>Nema studenata u bazi</h2> : students.map(student => <StudentCard students={students} key={student.id} studentInfo={student} modifyStudent={(e) => modifyStudent(e, student, students)}/>)} 
        </div>
    )
}