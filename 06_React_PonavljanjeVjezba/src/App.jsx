import { useState, useEffect } from 'react'

import StudentContainer from './components/StudentContainer'
import StudentForm from './components/StudentForm'
import './App.css'

function App() {
  const startingStudents = [{
    id: 0,
    name: "David",
    age: 25,
    active: false,
    grade: 3,
    bestStudent: false
  },
  {
    id: 1,
    name: "Ivan",
    age: 20,
    active: true,
    grade: 2,
    bestStudent: false
  },
  {
    id: 2,
    name: "Maja",
    age: 23,
    active: true,
    grade: 4,
    bestStudent: false
  }]

  const [students, modifyStudents] = useState([...startingStudents])

  function modifyStudent(event,student){
    if(event.target.type === "checkbox") modifyStudents([...(students.filter(s => s.id !== student.id)), {...student, active: !student.active}].sort((s1,s2) => s1.id < s2.id))
    else if(event.target.type === "button") modifyStudents(students.filter(s => s.id !== student.id));
  
  }

  function checkForBestStudent(){
    let bestStudent = students.sort((s1,s2) => s1.grade < s2.grade)[0];
    modifyStudents([...(students.filter(s => s.id !== bestStudent.id)),{...bestStudent, bestStudent: true}]);
  }
  useEffect(function(){
    window.id = students.length;
    modifyStudents(students.sort((s1,s2) => s1.id < s2.id))
    checkForBestStudent();
  }, [])

  return (
    <>
      <h1>Student info app</h1>
      <StudentContainer students={students} modifyStudent={modifyStudent}/>
      <StudentForm modifyStudents={modifyStudents}/>
    </>
  )
}

export default App
