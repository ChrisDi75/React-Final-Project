import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ChosenMovie from './components/ChosenMovie';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <Routes>
          <Route path="/Home" element={<Home />}>
          </Route>
          <Route path="/Movie/:imdbID" element={<ChosenMovie />}>
          </Route>
        </Routes>

      </SkeletonTheme>

    </div>
  );
}

export default App;
