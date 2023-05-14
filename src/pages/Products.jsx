import { useContext, useEffect } from 'react';
import { context } from '../context/AppProvider';

import Form from '../component/Form'
import CardProduct from '../component/CardProduct'
import { useHistory } from 'react-router-dom';

export default function Products() {
  const {
    listProduct, setListProduct, removeProduct
  } = useContext(context)

  const { push } = useHistory();

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    setListProduct(list)
  }, [setListProduct])


  const totalPrice = listProduct?.reduce((total, product) => {
    if (product.impost === '6.5') {
      return (total + ((Number(product.price) * 5.30) + (Number(product.price) * 5.30 * 0.065))) ;
    }    
    return (total + (Number(product.price) * 5.30));
  }, 0)

  return(
    <>
      <p onClick={ () => push('/cart') }>carrinho</p>
      <p>Total: { totalPrice.toFixed(2) }</p>
      <Form />
      <section>
        <ul>
        {
          listProduct.map((product, index) =>
            <CardProduct key={ index } product={ product } removeProduct={ () => removeProduct(product) } />
          )
        }
        </ul>
      </section>
    </>
  );
}