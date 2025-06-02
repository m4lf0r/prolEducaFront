import { useState } from "react";
import { Container, ExitButton, FormWrapper, Logo, Input, Button } from './styled';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <Container>
      <ExitButton onClick={() => console.log("Sair")}>Voltar</ExitButton>
      <FormWrapper onSubmit={handleSubmit}>
        <Logo>Login</Logo>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Entrar</Button>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;