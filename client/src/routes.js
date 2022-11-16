import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/Home">
                <Home />
            </Route>
            <Route exact path="/Login">
                <Login />
            </Route>
            <Route path="/Register">
                <Cadastro />
            </Route>
        </Switch>
    );  
}
