import { useContext, useEffect } from 'react';
import { context } from '../context/AppProvider';

import Form from '../component/Form'
import Header from '../component/Header';
import AsideBar from '../component/AsideBar';


export default function Products() {
  const {
    setListProduct
  } = useContext(context)

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    setListProduct(list)
  }, [setListProduct])


  return(
    <>
      <Header />
      <AsideBar />
      <main>
        <h1>Simule o seu pedido!</h1>
        <Form />
      </main>
    </>
  );
}