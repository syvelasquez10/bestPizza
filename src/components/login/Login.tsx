import React from 'react';
import './Login.scss';
import { Button, Form, Input } from 'antd';
import pizza from '../../assets/pizza.png';
import logo from '../../assets/logo.png';
import usuario from '../../assets/ic_usuario.png';
import passwordVisible from '../../assets/ic_contrasena_visible.png';
import password from '../../assets/ic_contrasena.png';

export function Login() {
  return (
    <div className="login">
        <div className="login-image-section">
            <img src={pizza} id="login-image" alt="pizza" />
        </div>
        <div className="login-form-section">
          <div className="container">
            <img src={logo} id="logo" alt="logo" />
            <h1>Bienvenido</h1>
            <h4>A las mejores pizzas del país</h4>
            <Form
            name="basic"
            initialValues={{ remember: true }}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Por favor ingrese un correo' }, {pattern: /\b[\w.-]+@[\w.-]+.\w{2,4}\b/, message: 'El valor ingresado no es un correo valido'}]}
                >
                    <Input placeholder="Usuario" suffix={<img src={usuario} className="icon" alt="icono usuario" />}/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Por favor ingrese la contraseña' }]}
                >
                  <Input.Password
                    placeholder="Contraseña"
                    iconRender={visible => (visible ? <img src={passwordVisible} className="icon" alt="icono contraseña" /> : <img src={password} className="icon" alt="icono contraseña" />)}
                  />
                </Form.Item>

                <strong>¿Olvidaste tu contraseña?</strong>

                <Form.Item>
                    <Button htmlType="submit">
                      Iniciar Sesión
                    </Button>
                </Form.Item>
            </Form>
          </div>
        </div>
    </div>
  );
}
