import { useContext, useEffect } from 'react';
import './App.css';
import { context } from './context/AppProvider';

function App() {
  const {
    name, setName,
    price, setPrice,
    impost, setImpost,
    listProduct, setListProduct
  } = useContext(context)

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    setListProduct(list)
  }, [setListProduct])

  const addProduct = (e) => {
    e.preventDefault();
    setListProduct((prev) => [...prev, { name, price, impost }])
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    localStorage.setItem('listOfProducts', JSON.stringify([...list, { name, price, impost }]))

    setName('')
    setPrice('')
    setImpost('')
  }

  const totalPrice = listProduct?.reduce((total, product) => total + (product.price * 5.30), 0);

  return (
    <>
      <div>
        <p>Total: { totalPrice.toFixed(2) }</p>
      </div>
      <form onSubmit={ (e) => addProduct(e) }>
        <input
          onChange={ ({ target }) => setName(target.value)}
          type="text"
          placeholder='Nome do produto'
          value={ name } />
        <input
          onChange={ ({ target }) => setPrice(target.value)}
          type="number"
          placeholder='valor em dolar'
          value={ price } />
        <input
          type="number"
          value='5.30'
          disabled
        />
        <label htmlFor="">Imposto
          <select
            value={ impost }
            onChange={ ({ target }) => setImpost(target.value)
          }>
            <option value=""></option>
            <option value="isento">Isento</option>
            <option value="6.5">6.5%</option>
          </select>
        </label>
        <input type="submit" />
      </form>
      <div>
        {
          listProduct.map((product, index) =>
            <ul key={ index }>
              <p>{ product.name }</p>
              <p>{ product.price }</p>
              <p>{ `R$ ${product.price * 5.30}` }</p>
            </ul>
          )
        }
      </div>
    </>
  );
}

export default App;
