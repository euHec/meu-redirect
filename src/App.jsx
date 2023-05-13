import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route exact path='/product' component={ Products } />
        <Route exact path='/cart' component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
