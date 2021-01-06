import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import pizza from "../../assets/pizza.png";
import logo from "../../assets/logo.png";
import usuario from "../../assets/ic_usuario.png";
import passwordVisible from "../../assets/ic_contrasena_visible.png";
import password from "../../assets/ic_contrasena.png";
import { login } from "../../services/http.service";
import { storeUser } from "../../services/auth.service";
import "./Login.scss";

export function Login() {
  const [error, setError] = useState("");
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values: any) => {
    const response = await login(values.email, values.password);
    if (response.message) {
      setError(response.message);
    } else if (response.user) {
      setError("");
      storeUser(response.user);
      form.resetFields();
      history.push("/home");
    }
  };

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
            form={form}
            name="basic"
            scrollToFirstError
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Por favor ingrese un correo" },
                {
                  pattern: /\b[\w.-]+@[\w.-]+.\w{2,4}\b/,
                  message: "El valor ingresado no es un correo valido",
                },
              ]}
            >
              <Input
                placeholder="Usuario"
                suffix={
                  <img src={usuario} className="icon" alt="icono usuario" />
                }
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Por favor ingrese la contraseña" },
              ]}
            >
              <Input.Password
                placeholder="Contraseña"
                iconRender={(visible) =>
                  visible ? (
                    <img
                      src={passwordVisible}
                      className="icon"
                      alt="icono contraseña"
                    />
                  ) : (
                    <img
                      src={password}
                      className="icon"
                      alt="icono contraseña"
                    />
                  )
                }
              />
            </Form.Item>

            <strong>¿Olvidaste tu contraseña?</strong>

            <Form.Item>
              <Button htmlType="submit">Iniciar Sesión</Button>
            </Form.Item>
            <span className="error">{error}</span>
          </Form>
        </div>
      </div>
    </div>
  );
}
