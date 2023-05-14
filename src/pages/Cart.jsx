import { useContext, useEffect, useState } from "react";
import { context } from "../context/AppProvider";
import CardProduct from "../component/CardProduct";

export default function Cart() {
  const { listProduct, removeProduct, setListProduct } = useContext(context);
  const [servicePrice, setServicePrice] = useState(0);

  const totalPriceREAL = listProduct?.reduce((total, product) => {
    if (product.impost === '6.5') {
      return (total + ((product.price * 5.30) + (product.price * 5.30 * 0.065))) ;
    }    
    return (total + (product.price * 5.30));
  }, 0)

  const totalPriceUSD = listProduct?.reduce((total, product) => {
    if (product.impost === '6.5') {
      return (total + (Number(product.price) + (Number(product.price) * 0.065))) ;
    }    
    return (total + Number(product.price));
  }, 0)

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('listOfProducts')) || [];
    setListProduct(list)
  }, [setListProduct])

  useEffect(() => {
    const service = () => {
      if (Number(totalPriceUSD) < 99) {
        return 15;
      } else if (Number(totalPriceUSD) >= 100 && Number(totalPriceUSD) <= 150) {
        return 25;
      } else if (Number(totalPriceUSD) >= 151 && Number(totalPriceUSD) <= 200) {
        return 30;
      } else {
        return Number(totalPriceUSD) * 0.18;
      }
    }
    setServicePrice(service());
  }, [totalPriceUSD])

  return(
    <section>
      Cart
      <div>
        <ul>
          {
            listProduct.map((product, index) =>
            <CardProduct key={ index } product={ product } removeProduct={ () => removeProduct(product) } />
            )
          }
        </ul>
      </div>
      <div>
        Taxa de serviço: 
        {
          (servicePrice * 5.30).toFixed(2)
        }
      </div>
      <div>
        total: R$ 
        {
          totalPriceREAL.toFixed(2)
        }
      </div>
      <div>
        total tudo: R$ { (totalPriceREAL + (servicePrice * 5.30)).toFixed(2) }
      </div>
    </section>
  );
}