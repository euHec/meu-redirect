import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/Mobile.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/meu-redirect/' component={ Login } />
        <Route exact path='/meu-redirect/product' component={ Products } />
        <Route exact path='/meu-redirect/cart' component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
