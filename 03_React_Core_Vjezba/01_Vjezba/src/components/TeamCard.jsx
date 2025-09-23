function TeamCard({ emote, name, voteCount, setVoteCount, setMes}){

    function increment(){
        setVoteCount(current => current + 1);
        setMes("Vote count increased");
    }
    function decrement(){
        setVoteCount(current => current - 1);
        if(voteCount < 1){ 
            setVoteCount(0);
            setMes("Vote count can't be negative");
        }
        else setMes("Vote count decreased");
    }
    return (
        <div>  
            <h2>{ name }</h2>
            <div>{ emote }</div>
            <p>{ voteCount }</p>
            <button type="button" onClick={decrement}>Smanji</button>
            <button type="button" onClick={increment}>Povećaj</button>
        </div>
    )
}

export default TeamCard;