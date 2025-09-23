import { useState } from 'react'
import './App.css'

function App() {
  const [todoItems, setTodoItems] = useState([])
  const [inputValue, setInputValue] = useState("");
  let [id, setId] = useState(0);

  function addTodoItem(){
    if(inputValue != ""){
      let todoItem = createTodoItem()
      setTodoItems(todoItems => [...todoItems, todoItem]);
      setInputValue("");
    }
    else console.log("Input nesmije biti prazan");
  }

  function createTodoItem(){
    setId(v => v+1);
    return {
      id: id,
      text: inputValue
    }
  }

  function onDelete(event){
    let idToDelete = event.target.getAttribute("dataid");

    setTodoItems(todoItems.filter((item) => idToDelete != item.id));
  }

  return (
    <>
      <div style={contStyle}>
        <input name="todo" value={inputValue} onChange = {(e) => setInputValue(e.target.value)} placeholder='Enter todo item'/>
        <button onClick={addTodoItem}>Add todo item</button>
      </div>
      <ul>
        {(todoItems.length === 0) ? (<p>Nema zadataka</p>) : todoItems.map(item => (
          <li style ={ itemStyle } key = {item.id}>
            <p>{item.text}</p>
            <button dataid={item.id} onClick={onDelete}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

const contStyle = {
  display: "flex",
  flexDirection: "column",
}

const itemStyle = {
  display: "flex",
  gap: "8px",
}

export default App
