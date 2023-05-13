import { useContext, useEffect } from 'react';
import { context } from '../context/AppProvider';

import Form from '../component/Form'

export default function Products() {
  const {
    listProduct, setListProduct
  } = useContext(context)

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    setListProduct(list)
  }, [setListProduct])

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

  return(
    <>
      <Form />
      <div>
        <p>Total: { totalPrice.toFixed(2) }</p>
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