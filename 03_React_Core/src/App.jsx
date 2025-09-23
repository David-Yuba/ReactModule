import { useState } from "react";

import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Message from "./components/Message";
import LoginPanel from "./components/Loginpanel";

import './App.css'

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      <h1>Moja react aplikacija</h1>
      <Welcome name="Ana"/>
      <Welcome name="Ivan"/>
      <Welcome name="Maja"/>
      <p>Pokrenuta pomoću Vite-a</p>
      <Counter />
      <button type="button" onClick={() => setShowTimer(!showTimer)}>Show timer</button>
      <h2>Timer</h2>
      <Timer />
      <br/>
      <br/>
      <Message></Message>
      <LoginPanel/>
    </div>
  )
}

export default App
