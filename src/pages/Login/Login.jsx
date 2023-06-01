import axios from "axios";
import Header from "../../components/Header/Header";
import { useState } from "react";
import './Login.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const userLogin = (event) => {
    event.preventDefault();
    const user = event.target.usernameField.value;
    const password = event.target.passwordField.value;
    axios.post('https://distriplay-back.azurewebsites.net/clientes/login', {
      usuario: user,
      contrasena: password
    })
      .then((response) => {
        console.log("response.data: ", response.data);
        localStorage.setItem('user', JSON.stringify(response.data.data));
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Usuario o contraseña incorrectos');
      });
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form-container">
          <div className="login-message">
            {errorMessage}
          </div>
          <h2>Iniciar sesión</h2>
          <form className="login-form" onSubmit={(e) => userLogin(e)}>
            <div className="login-form-item">
              <input
                type="text"
                className="login-form-input-field"
                id="usernameField"
                aria-describedby="emailHelp"
                placeholder="Nombre de usuario"
              />
            </div>
            <div className="login-form-item">
              <input
                type="password"
                className="login-form-input-field"
                id="passwordField"
                aria-describedby="emailHelp"
                placeholder="Contraseña"
              />
            </div>
            <div className="login-form-item">
              <button type="submit" className="btn btn-primary login-form-button">Ingresar</button>
            </div>
          </form>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
