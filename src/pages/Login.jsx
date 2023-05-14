import { useContext, useEffect, useState } from "react";
import { contextAuth } from "../context/AppAuth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { name, setName, email, setEmail } = useContext(contextAuth)
  const [validation, setValidation] = useState(true);
  const { push } = useHistory();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  useEffect(() => {
    setValidation(!validarEmail(email));
  }, [email])

  return(
    <div>
      <input type="text" value={ name } onChange={ ({ target }) => setName(target.value)} />
      <input type="email" value={ email } onChange={ ({ target }) => setEmail(target.value)} />
      <input type="button" value="Entrar" disabled={ validation } 
        onClick={ () => push('/product') }/>
    </div>
  );
}