import { useState } from "react";
import { useSignIn } from "../../hooks/useSigIn";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, error, isLoading } = useSignIn();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const requestStatus =  await signIn({ 
      email: email,
      password: password,
    })
    if(requestStatus === 401) {
      alert(JSON.stringify(requestStatus));
    } else {
      window.location.href = "/";
    }
  }

  return (
    <div className="card">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label>Email:</label>
        <InputText 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          className="mx-2"
        />
        <label>Password:</label>
        <InputText
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          className="mx-2"
        />

        <Button disabled={isLoading}>Log in</Button>
        {error && <span>{error}</span>}
      </form>
    </div>
  )
}
