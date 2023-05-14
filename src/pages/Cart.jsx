import { useContext } from "react";
import { context } from "../context/AppProvider";
import CardProduct from "../component/CardProduct";

export default function Cart() {
  const { listProduct, removeProduct } = useContext(context);

  return(
    <section>
      Cart
      <ul>
        {
          listProduct.map((product, index) =>
            <CardProduct key={ index } product={ product } removeProduct={ () => removeProduct(product) } />
          )
        }
        </ul>
    </section>
  );
}