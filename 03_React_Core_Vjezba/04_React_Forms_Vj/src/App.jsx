import RegFormContainer from './components/RegFormContainer'
import LoginForm from './components/LoginForm'
import './App.css'

function App() {

  return (
    <>
      <h2 id="registration-form">Register form</h2> <a href="#login-form">Go to login form</a>
      <RegFormContainer/>
      <h2 id="login-form">Login form</h2> <a href="#registration-form">Go to registration form</a>
      <LoginForm/>
    </>
  )
}

export default App
