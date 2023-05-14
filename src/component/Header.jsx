import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import { context } from "../context/AppProvider";
import { IoReturnDownBack } from "react-icons/io5";


export default function Header() {

  const { listProduct, classType, setClassType } = useContext(context);

  const { push, location: { pathname } } = useHistory();

  return (
    <header>
      <FiMenu
        className="icon-menu"
        onClick={ () => setClassType(!classType) }
      />
      <p>Meu Redirect <span>!</span></p>
      <label className="icon-cart">
        <span>
          { 
            pathname === '/product'&& listProduct.length !== 0 && listProduct.length 
          }
        </span>
        {
          pathname === '/product'
          ? <AiOutlineShoppingCart onClick={ () => push('/meu-redirect/cart') } />
          : <IoReturnDownBack onClick={ () => push('/meu-redirect/product') } />
        }
      </label>
    </header>
  );
}