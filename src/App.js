import { Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Timer from './pages/Timer';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

ReactGA.initialize('UA-130029095-1');
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(function (location) {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

function App() {
  return (
    <Router history={history}>
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
    </Router>
  );
}

export default App;
