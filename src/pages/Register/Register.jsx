import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Register.scss';
import axios from 'axios';

const Register = () => {
    const [emailError, setEmailError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const cedula = e.target.cedula.value;
        const nombres = e.target.nombre.value;
        const apellidos = e.target.apellido.value;
        const usuario = e.target.usuario.value;
        const telefono = e.target.telefono.value;
        const pais = e.target.pais.value;
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;
        const contrasena2 = e.target.password2.value;

        // Validación de correo electrónico
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(correo)) {
            setEmailError(true);
            return;
        }

        const user = {
            cedula,
            nombres,
            apellidos,
            usuario,
            telefono,
            pais,
            correo,
            contrasena,
            contrasena2
        }

        axios.post('https://distriplay-back.azurewebsites.net/clientes', user)
            .then((response) => {
                console.log(response);
                window.location.href = '/';
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
        <Header />
        <div className="register-container">
            <div className="register-form-container">
                <h2>Registro</h2>
                <form className="register-form" onSubmit={onSubmit}>
                    <div className="register-form-item">
                        <input type="text" name="cedula" id="cedula" required placeholder="Cédula" />
                    </div>
                    <div className="register-form-item">
                        <input type="text" name="nombre" id="nombre" required placeholder="Nombres" />
                    </div>
                    <div className="register-form-item">
                        <input type="text" name="apellido" id="apellido" required placeholder="Apellidos" />
                    </div>
                    <div className="register-form-item">
                        <input type="text" name="usuario" id="usuario" required placeholder="Usuario" />
                    </div>
                    <div className="register-form-item">
                        <input type="text" name="telefono" id="telefono" required placeholder="Teléfono" />
                    </div>
                    <div className="register-form-item">
                        <input type="text" name="pais" id="pais" required placeholder="País" />
                    </div>
                    <div className="register-form-item">
                        <input type="email" name="email" id="email" required placeholder="Email" />
                        {emailError && <span className="error">Por favor, ingresa un correo electrónico válido.</span>}
                    </div>
                    <div className="register-form-item">
                        <input type="password" name="password" id="password" required placeholder="Contraseña" />
                    </div>
                    <div className="register-form-item">
                        <input type="password" name="password2" id="password2" required placeholder="Confirmar contraseña" />
                    </div>
                    <div className="register-form-item">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Register;