import { createContext, useMemo, useState } from "react";

export const context = createContext();

export default function Provider({ children }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [impost, setImpost] = useState('');
  const [listProduct, setListProduct] = useState([]);


  const values = useMemo(() => ({
    name, setName,
    price, setPrice,
    impost, setImpost,
    listProduct, setListProduct
  }), [name, price, impost, listProduct])

  return (
    <context.Provider value={ values }>
      { children} 
    </context.Provider>
  )
}