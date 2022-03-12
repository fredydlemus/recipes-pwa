import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Timer from './pages/Timer';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { IfOffline } from './components/IfOffline';


const history = createBrowserHistory();

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(function (location) {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

console.log(history)
function App() {
  return (
    <BrowserRouter history={history}>
      <div>
        <header>
          <Link to="/">Recepies <IfOffline>offline</IfOffline></Link>
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
