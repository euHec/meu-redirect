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
    <>
      <div className="logo">
        Meu Redirect <span>!</span>
      </div>
      <div className="conteiner-login">
        <input
          className="input-login"
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          placeholder="Digite seu nome"
        />
        <input
          className="input-login"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          placeholder="Digite seu e-mail"
        />
        <input
          className="input-login"
          type="button"
          value="Entrar"
          disabled={ validation } 
          onClick={ () => push('/product') }
        />
      </div>
    </>
  );
}