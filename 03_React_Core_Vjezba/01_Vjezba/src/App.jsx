import { useState } from 'react';
import TeamCard from './components/TeamCard';
import './App.css'

function App() {
  let [voteCount1, setVoteCount1] = useState(0);
  let [voteCount2, setVoteCount2] = useState(0);
  let [voteCount3, setVoteCount3] = useState(0);
  let [message, setMessage] = useState("");
  let voteCountSum = voteCount1 + voteCount2 + voteCount3;
  
  let teams = [
    {
      name: "name1",
      emote: "emote1",
      voteCount: voteCount1,
      setVoteCount: setVoteCount1
    },
    {
      name: "name2",
      emote: "emote2",
      voteCount: voteCount2,
      setVoteCount: setVoteCount2
    },
    {
      name: "name3",
      emote: "emote3",
      voteCount: voteCount3,
      setVoteCount: setVoteCount3
    }
  ]
  function reset(){
    setMessage("Vote count reset")
    setVoteCount1(0);
    setVoteCount2(0);
    setVoteCount3(0);
  }

  return (
    <>
      <div style={{display: "flex"}}>
        {teams.map((team,index) => (<TeamCard key={index} emote={team.emote} name={team.name} voteCount={team.voteCount} setVoteCount={team.setVoteCount} setMes={setMessage}/>))}
      </div>
      <p>Ukupan broj glasova:{voteCountSum}</p>
      <p>Leader is { teams.sort((team1, team2) => team1.voteCount < team2.voteCount)[0].name}</p>
      <button onClick={reset} disabled={(voteCountSum == 0) ? true : false} >Reset</button>
      <p>{message}</p>
    </>
  )
}

export default App
