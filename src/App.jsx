import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NumberGuessGame from './components/games/NumberGuessGame';
import Home from './pages/Home';
import RockPaperScissors from './components/games/RockPaperScissors';
import DiceRoller from './components/games/DiceRoller';
import MemoryMatch from './components/games/MemoryMatch';
import TriviaQuiz from './components/games/TriviaQuiz';
import WordUnscramble from './components/games/WordUnscramble';
import GridPuzzle from './components/games/GridPuzzle';
import IdleClicker from './components/games/IdleClicker';
import CardBattle from './components/games/CardBattle';
import ReactionSpeed from './components/games/ReactionSpeed';
import SidebarMenu from './pages/SidebarMenu'; // update path as needed
import Navbar from './pages/Navbar'; // update path as needed

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        
        <SidebarMenu />

        
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
            <Route path="/number-guess" element={<NumberGuessGame />} />
            <Route path="/dice-roller" element={<DiceRoller />} />
            <Route path="/memory-match" element={<MemoryMatch />} />
            <Route path="/trivia-quiz" element={<TriviaQuiz />} />
            <Route path="/word-unscramble" element={<WordUnscramble />} />
            <Route path="/grid-puzzle" element={<GridPuzzle />} />
            <Route path="/idle-clicker" element={<IdleClicker />} />
            <Route path="/card-battle" element={<CardBattle />} />
            <Route path="/reaction-speed" element={<ReactionSpeed />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
