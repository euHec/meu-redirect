import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import { context } from "../context/AppProvider";

export default function Header() {

  const { listProduct } = useContext(context);

  const { push } = useHistory();

  return (
    <header>
      <FiMenu className="icon-menu"/>
      <p>Meu Redirect <span>!</span></p>
      <label className="icon-cart">
        <span>
          { listProduct.length !== 0 && listProduct.length }
        </span>
        <AiOutlineShoppingCart onClick={ () => push('/cart') } />
      </label>
    </header>
  );
}