import { useContext } from "react";
import { context } from "../context/AppProvider";
import { useHistory } from "react-router-dom";

export default function AsideBar() {
  const { classType, setClassType } = useContext(context);

  const { push } = useHistory();

  return (
    <div className={ `aside aside-${classType}` }>
      <p onClick={ () => {
          push('/product')
          setClassType(!classType)
        }
      }
        >Simulador
      </p>
      <p onClick={
        () => {
          push('/cart')
          setClassType(!classType)
        }
      }
      >
        Carrinho</p>
      <p onClick={
        () => {
          push('/')
          setClassType(!classType)
        } 
      }
      >
        Sair
      </p>
    </div>
  );
}