import React from "react";
import { Field, reduxForm } from "redux-form";


const LoginForm = (props) => {
    return (
        <form   onSubmit={props.handleSubmit}>
            <Field placeholder="email" component="input" name="email"/>
            <Field placeholder="password" component="input" name="password"/>
            <div>
                <Field type="checkbox" component="checkbox" name="rememberMe"/> Remember me
            </div>
            <button>Login</button>
        </form>
    )
}

let ReduxLoginFrom = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <h1>Login</h1>
            <ReduxLoginFrom onSubmit ={onSubmit}/>
        </>
    )
}
export default Login;