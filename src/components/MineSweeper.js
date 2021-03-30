
import { useState } from 'react';
import Header from './Header'
import Cell from './mineSweeper/Cell';


function MineSweeper() {
  const [btnName, setBtnname] = useState("Start");
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  const randomGrnerator = () => {
    return Math.floor(Math.random()*81);
  }

  const startGame = () => {
    if(count==0){
    setCount(1);
    let temp = [];
    let bombs = [];
    for(let i=0; i<15; i++){
      bombs.push(randomGrnerator());
    }
    console.log(bombs);
    for(let i=0; i<81; i++){
        if(bombs.includes(i)){
          temp.push(<Cell value="X"/>)
        }
        else{
          temp.push(<Cell/>);
        }
    }
    setBoard(temp);
    setBtnname("Restart"); 
   }
   else if(count==1){
    window.location.reload();
   }
  }
   const get = (event) => {
      console.log(event.target.innerHTML);
      if(event.target.innerHTML=='X.'){
        event.target.innerHTML='💣';
        alert("you Loose the game !!");
        window.location.reload();
      }
      else{
        setScore(score+1);
      }
   }
    return (
      <>
        <Header heading = "MINE SWEEPER"/>
        <div className="minesweeperStartButton">
          <button className="btn btn-warning" onClick={startGame}>{btnName}</button> 
          <h3 className="text-danger mineSweeperScore">{`Score: ${score}`}</h3>
        </div>
        <div className="minesweepercentering"><div className="mineSweeperBoard" onClick={get}>{board}</div></div>  
      </>
    );
  }
  
  export default MineSweeper;