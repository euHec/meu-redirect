import { useContext } from "react";
import { context } from "../context/AppProvider";
import { useHistory } from "react-router-dom";

export default function AsideBar() {
  const { classType, setClassType } = useContext(context);

  const { push } = useHistory();

  return (
    <div className={ `aside aside-${classType}` }>
      <p onClick={ () => {
          push('/meu-redirect/product')
          setClassType(!classType)
        }
      }
        >Simulador
      </p>
      <p onClick={
        () => {
          push('/meu-redirect/cart')
          setClassType(!classType)
        }
      }
      >
        Carrinho</p>
      <p onClick={
        () => {
          push('/meu-redirect/')
          setClassType(!classType)
        } 
      }
      >
        Sair
      </p>
    </div>
  );
}