import { useContext } from 'react';
import { context } from '../context/AppProvider';
import generateUniqueId from '../helper/generetID';

export default function Form() {
  const {
    name, setName,
    price, setPrice,
    impost, setImpost,
    setListProduct,
  } = useContext(context)

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

  return (
    <section>
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
    </section>
  );
}
