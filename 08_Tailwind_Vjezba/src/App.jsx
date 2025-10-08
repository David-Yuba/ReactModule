import { ThemeContext } from './components/ThemeContext'
import { useState } from 'react';
import './App.css'
import MainContent from './components/MainContent'

function App() {

  const [themeState, setTheme] = useState("autumn");

  return (
    <ThemeContext value={{themeState, setTheme}}>
      <MainContent />
    </ThemeContext>
  )
}

export default App
