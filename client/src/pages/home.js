import React from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";

function Home() {

    const handleClickHome = (values) => {
        Axios.post("http://localhost:3001/Home", {
            email: values.email,
            name: values.name,
            password: values.password,
          }).then((response) => {
              console.log(response);
          });
    };

    return (
        <div className='Container'>
            <h1>Logado com sucesso!</h1>
        </div>
    )

};
export default Home;