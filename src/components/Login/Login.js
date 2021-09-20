import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import {Input, createField} from '../common/FormsControl/FormsControl';
import { requiredField } from "../../validators/validators";
import s from './Login.module.css'
import { connect } from "react-redux";
import {login} from '../../redux/auth-reducer';
import { Redirect } from "react-router";

const LoginForm = ( {handleSubmit, error}) => {
    return (
        <form   onSubmit={handleSubmit}>
            
            <label htmlFor="email" className={s.label}>Email: <i>olegmaltewic@gmail.com</i></label>
            
            {createField("email (copy the value from above)", Input, "email", "email",[requiredField] )}

            <label htmlFor="password" className={s.label}>Password: <i>password</i></label>
            {createField("password (copy the value from above)", Input, "password", "password",[requiredField] )}
            <div className={s.checkbox}>
                <Field type="checkbox" component="input" name="rememberMe"/> Remember me
            </div>
             {error && <div className={s.commonError}> {error}</div>}
            <button>Login</button>
        </form>
    )
}

let ReduxLoginFrom = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = ({email, password, rememberMe}, dispatch) => {
        props.login(email, password, rememberMe)
    
    }
    if (props.isLogin) return <Redirect to='/profile'/>
    return (
        <div className={s.form}>
            <h1>Login</h1>
            <ReduxLoginFrom onSubmit ={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin
})
export default connect(mapStateToProps, {login})(Login);