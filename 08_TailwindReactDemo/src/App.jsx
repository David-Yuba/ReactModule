import { useTheme } from './components/ThemeContext'

import './App.css'

function App() {

  const {theme, toggleTheme} = useTheme();

  return (
    <>
      <div className = {"min-h-screen shadow-lg rounded-2xl" + (theme === "light" ? "bg-gray-100" : "bg-gray-600")}>
        <h1 className = "text-4xl font-bold text-blue-600">Tailwind radi!!!!</h1>
        <p className={" mb-6 " + (theme === "light" ? "text-gray-600" : "text-gray-100")}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum fugit voluptate repellat unde ullam ex sunt perspiciatis omnis alias dolorum, facere nemo obcaecati magnam tenetur impedit beatae aspernatur expedita.</p>
        <button onClick = {toggleTheme} className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-full transition-colors duration-300">
          Promijeni temu. Trenutna: {theme}
        </button>
      </div>
    </>
  )
}

export default App
