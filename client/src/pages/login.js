import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import * as yup from "yup";
import Axios from "axios";
import './login.css';
import gif from '../gif.gif';

function Login() {

  const handleClickLogin = (values) => {
      Axios.post("http://localhost:3001/Login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
        console.log(response);
    });
  };
  
  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email valido!").required("Este campo é obrigatorio!"),
    password: yup.string().min(8, "A senha deve conter 8 caracteres!").required("Esse campo é obrigatorio!"),
  });


  return (
    <div className="Container">
      <h1 className="login">Login</h1>
      <Formik initialValues={ {} } onSubmit={handleClickLogin} validationSchema={validationLogin}>
          <Form className="Form">

            <div className="form-login-group">  
              <Field name="email" className="form-field" />
              <ErrorMessage
              component="span"
              name="email"
              className="Form-error-email"/>
              <label>Email</label>
            </div>

            <div className="form-login-group">
                <Field name="password" autocomplete="off" className="form-field" />
                <ErrorMessage 
                component="span"
                name="password"
                className="Form-error-senha"/>
                <label>Senha</label>
            </div>

            <button className="button" type="submit" to="/Home">Login</button>
            
            <button className='button'>
               <Link className="Link" to="/Register">Cadastrar</Link>
            </button>
            <div className="footer">
              <img className="gif" src={gif} alt="foto"/>
            </div>
          </Form>
      </Formik>
    </div>
  );
};
export default Login;
