import { useContext, useEffect } from 'react';
import { context } from '../context/AppProvider';

import Form from '../component/Form'
import Header from '../component/Header';
import AsideBar from '../component/AsideBar';


export default function Products() {
  const {
    setListProduct, price, impost
  } = useContext(context)

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    setListProduct(list)
  }, [setListProduct])

  const parcialPrice = impost === '6.5' ? (Number(price) + Number(price) * (Number(impost) / 100)) * 5.30 : Number(price) * 5.30;

  return(
    <>
      <Header />
      <AsideBar />
      <main>
        <h1>Simule o seu pedido!</h1>
        <h1>{ `R$ ${parcialPrice.toFixed(2)}` }</h1>
        <Form />
      </main>
    </>
  );
}