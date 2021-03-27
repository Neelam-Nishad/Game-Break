
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tictactoe from './components/Tictactoe';
import Thumbnail from './components/Thumbnail';
import RockPaperScissor from './components/RockPaperScissor';
import TwoZeroFourEight from './components/TwoZeroFourEight';
import MineSweeper from './components/MineSweeper';

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" exact>
            <Header heading="GAME BREAK" />
            <Link to='/tictactoe'>
              <Thumbnail source="https://images-eu.ssl-images-amazon.com/images/I/41Yj12sPTtL.png" title="TIC TAC TOE" />
            </Link>
            <Link to='/rockpaperscissor'>
              <Thumbnail source="https://miro.medium.com/max/612/1*G9UfaUBS_VqtFILMe37fZw.jpeg" title="ROCK-PAPER-SCISSOR"/>
            </Link>
            <Link to='/2048'>
              <Thumbnail source="https://images-eu.ssl-images-amazon.com/images/I/611iRhbfKVL.png" title="2048"/>
            </Link>
            <Link to="/minesweeper">
              <Thumbnail source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAL-1ps_On05n7-ctGAUoZR5CmLFeUTRtGXg&usqp=CAU" title="MINE SWEEPER"/>
            </Link>
          </Route>

          <Route path="/tictactoe" exact>
            <Tictactoe />
          </Route>
          <Route path="/rockpaperscissor" exact>
            <RockPaperScissor />
          </Route>
          <Route path="/2048">
            <TwoZeroFourEight/>
          </Route>
          <Route path="/minesweeper">
            <MineSweeper/>
          </Route>
        </Switch>

      </Router>


    </>
  );
}

export default App;
