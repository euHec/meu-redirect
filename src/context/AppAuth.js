import { createContext, useMemo, useState } from "react";

export const contextAuth = createContext();

export default function ProviderAuth({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const values = useMemo(() => ({
    name, setName,
    email, setEmail,
  }), [name, email])

  return (
    <contextAuth.Provider value={ values }>
      { children} 
    </contextAuth.Provider>
  )
}