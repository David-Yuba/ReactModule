import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import CounterWithLimit from './pages/CounterWithLimit'
import Clock from './pages/Clock'
import ThemeSwitcher from './pages/ThemeSwitcher'
import FocusInput from './pages/FocusInput'
import TodoList from './pages/TodoList'
import SearchList from './pages/SearchList'
import ExpensiveCalculator from './pages/ExpensiveCalculator'
import LocalStorage from './pages/LocalStorage'

import './App.css'
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element ={<Layout/>}>
            <Route index element={<CounterWithLimit/>}/>
            <Route path="/clock" element={<Clock/>}/> 
            <Route path="/theme-switcher" element={<ThemeSwitcher/>}/> 
            <Route path="/focus-input" element={<FocusInput/>}/> 
            <Route path="/todo-list" element={<TodoList/>}/> 
            <Route path="/search-list" element={<SearchList/>}/> 
            <Route path="/expensive-calculator" element={<ExpensiveCalculator/>}/> 
            <Route path="/local-storage" element={<LocalStorage/>}/> 
          </Route>
        </Routes>
    </>
  )
}

export default App
