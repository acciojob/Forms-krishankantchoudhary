import React from "react";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const App=()=>{
    return(
        <BrowserRouter>
        <nav>
            <Link id="form-link" to="/form">Form</Link>
            <Link id="form-ref-link" to="/formref">FormRef</Link>
            <Link  id="form-state-link" to="/formState">FormState</Link>
        </nav>
        <Switch>
            <Route path="/form" component={Form}/>
            <Route path="/formref" component={FormRef}/>
            <Route path="/formstate" component={FormState}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App;