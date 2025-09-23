import { useState, useEffect } from 'react';
import Quote from './components/quote';
import './App.css';

function App() {
  const quotes = [
    "Programiranje je umjetnost rješavanja problema.",
    "Kod je humorista: kada ga moraš objasniti, loš je.",
    "Jedina konstanta u tehnologiji je promjena.",
    "React čini UI predvidljivim i modularnim."
  ];
  const [currentQuote, setCurrentQuote] = useState("");
  const [message, setMessage] = useState("");
  useEffect(function(){
    selectQuote();
  },[]);

  function selectQuote(){
    setCurrentQuote(quotes[Math.floor((Math.random()*quotes.length))]);
    setMessage("Prikazan novi citat!");
  }

  return (
    <>
      <Quote>{currentQuote}</Quote>
      <button type="button" onClick={selectQuote}>Generate new quote</button>
      <p>{message}</p>
    </>
  )
}

export default App;
