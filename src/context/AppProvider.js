import { createContext, useCallback, useMemo, useState } from "react";

export const context = createContext();

export default function Provider({ children }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [impost, setImpost] = useState('');
  const [listProduct, setListProduct] = useState([]);

  const removeProduct = useCallback(({ id }) => {
    const newListProducts = listProduct.filter((product) => product.id !== id);
    setListProduct(newListProducts)
    localStorage.setItem('listOfProducts', JSON.stringify(newListProducts))
  }, [listProduct])

  const values = useMemo(() => ({
    name, setName,
    price, setPrice,
    impost, setImpost,
    listProduct, setListProduct,
    removeProduct,
  }), [name, price, impost, listProduct, removeProduct])

  return (
    <context.Provider value={ values }>
      { children} 
    </context.Provider>
  )
}