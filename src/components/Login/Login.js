import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import {Input} from '../common/FormsControl/FormsControl';
import { requiredField } from "../../validators/validators";
import s from './Login.module.css'

const LoginForm = (props) => {
    return (
        <form   onSubmit={props.handleSubmit}>
            
            <label for="email" className={s.label}>Email</label>
            <Field placeholder="email" component={Input} 
            name="email" id="email"
            validate={[requiredField]} />

            <label for="password" className={s.label}>Password</label>
            <Field placeholder="password" component={Input}
             name="password" id="password"
             validate={[requiredField]}/>
            <div className={s.checkbox}>
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
    const onSubmit = (data, dispatch) => {
        console.log(data)
        dispatch(reset("login"))
    }
    return (
        <div className={s.form}>
            <h1>Login</h1>
            <ReduxLoginFrom onSubmit ={onSubmit}/>
        </div>
    )
}
export default Login;