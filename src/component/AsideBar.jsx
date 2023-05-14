import { useContext } from "react";
import { context } from "../context/AppProvider";

export default function AsideBar() {
  const { classType } = useContext(context);

  return (
    <div className={ `aside-${classType}` }>
      <p>Simulador</p>
      <p>Carrinho</p>
      <p>Sair</p>
    </div>
  );
}