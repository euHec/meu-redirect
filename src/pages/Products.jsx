import { useContext, useEffect } from 'react';
import { context } from '../context/AppProvider';

import Form from '../component/Form'
import CardProduct from '../component/CardProduct'
import Header from '../component/Header';


export default function Products() {
  const {
    listProduct, setListProduct, removeProduct
  } = useContext(context)

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
      <Header />
      <main>
        <p>R$ { totalPrice.toFixed(2) }</p>
        <Form />
        <section className="container-products">
          <ul>
          {
            listProduct.map((product, index) =>
              <CardProduct key={ index } product={ product } removeProduct={ () => removeProduct(product) } />
            )
          }
          </ul>
        </section>
      </main>
    </>
  );
}