import LoginForm from "../../components/LoginForm";


const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;