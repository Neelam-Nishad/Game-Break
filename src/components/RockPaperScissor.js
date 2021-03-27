import { useState } from 'react';
import Header from './Header'
import Card from './rockPaperScissor/Card';

const RockPaperScissor = () => {
  const wepon = ['Rock 🤘', 'Paper 📃', 'Scissors ✂'];
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [user, setUser] = useState(wepon[0]);
  const [system, setSystem] = useState(wepon[0]);

  const getRandom = () => {
    let num = Math.floor(Math.random()*3);
    console.log(num);
    return num;
    
  }

  const getButton = async (event) => {
    console.log(event.target.id);
    setUser(event.target.id);
    
    setSystem(wepon[Math.floor(Math.random()*3)]);
    console.log(system);
    
    if((user===wepon[0] && system===wepon[2]) || (user===wepon[1] && system===wepon[0]) || (user===wepon[2] && system===wepon[1]) ){
      setWinner("You win!!");
      setScore(score+1);
    }
    if(user===system){
      setWinner("Tie!!");
    }
    if(user===wepon[2] && system===wepon[0] || user===wepon[0] && system===wepon[1] || user===wepon[1] && system===wepon[2]){
      setWinner("You loose!!");
      setScore(score-1);
    }
  }

    return (
      <>
        <Header heading = "ROCK PAPER SCISSORS"/>
        <div onClick={getButton} className="wepons">
          <button className="button" ><img className='images' id={wepon[0]} src="https://thumbs.dreamstime.com/b/flirty-japanese-cartoon-rock-digital-illustration-116946145.jpg"/></button>
          <button className="button" ><img className='images' id={wepon[1]} src="https://st2.depositphotos.com/1742172/5966/v/950/depositphotos_59662861-stock-illustration-paper-sheet-cartoon-character.jpg"/></button>
          <button className="button" ><img className='images' id={wepon[2]} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6aUTN9Rlr6FhKgiYMfx3n2df3noXgUE0kg&usqp=CAU"/></button>
        </div>
        <div className='display'>
          <h2 className="choices">{user}</h2>
          <h3 className="choices">{winner}</h3>
          <h2 className="choices">{system}</h2>
        </div>
        <div className="score">
          <h2>Score: {score}</h2>
        </div>

      </>
    );
  }
  
  export default RockPaperScissor;