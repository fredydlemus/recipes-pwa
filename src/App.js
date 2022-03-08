import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Timer from './pages/Timer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Recepies</Link>
        </header>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/recipe/:recipeId' element={<Recipe />} />
            <Route exact path='/timer' element={<Timer />} />
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
