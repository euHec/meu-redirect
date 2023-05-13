import { useContext, useEffect } from 'react';
import './App.css';
import { context } from './context/AppProvider';
import generateUniqueId from './helper/generetID';

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
    const id = generateUniqueId();
    setListProduct((prev) => [...prev, { id, name, price, impost }])
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    localStorage.setItem('listOfProducts', JSON.stringify([...list, { id, name, price, impost }]))

    setName('')
    setPrice(0)
    setImpost('')
  }

  const removeProduct = ({ id }) => {
    const newListProducts = listProduct.filter((product) => product.id !== id);
    setListProduct(newListProducts)
    localStorage.setItem('listOfProducts', JSON.stringify(newListProducts))
  }

  const totalPrice = listProduct?.reduce((total, product) => {
    if (product.impost === '6.5') {
      return (total + ((product.price * 5.30) + (product.price * 5.30 * 0.065))) ;
    }    
    return (total + (product.price * 5.30));
  }, 0)

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
          defaultValue='5.30'
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
        <ul>
        {
          listProduct.map((product, index) =>
            <li key={ index }>
              <p>{ product.name }</p>
              <p>{ product.price }</p>
              {
                product.impost === '6.5'
                ? <p>{ `R$ ${ ((product.price * 5.30) + (product.price * 5.30 * 0.065)).toFixed(2) }` }</p>
                : <p>{ `R$ ${ (product.price * 5.30).toFixed(2) }` }</p>
              }
              <button
                onClick={ () => removeProduct(product) }
              >
                remover
              </button>
            </li>
          )
        }
        </ul>
      </div>
    </>
  );
}

export default App;
