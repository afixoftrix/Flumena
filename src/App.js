import { Switch, Route } from 'react-router-dom';

import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
