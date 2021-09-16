import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import {Input} from '../common/FormsControl/FormsControl';
import { requiredField } from "../../validators/validators";
import s from './Login.module.css'
import { connect } from "react-redux";
import {login} from '../../redux/auth-reducer';
import { Redirect } from "react-router";

const LoginForm = (props) => {
    return (
        <form   onSubmit={props.handleSubmit}>
            
            <label for="email" className={s.label}>Email</label>
            <Field placeholder="email" component={Input} 
            name="email" id="email"
            validate={[requiredField]} />

            <label for="password" className={s.label}>Password</label>
            <Field placeholder="password" component={Input}
             name="password" id="password" type="password"
             validate={[requiredField]}/>
            <div className={s.checkbox}>
                <Field type="checkbox" component="input" name="rememberMe"/> Remember me
            </div>
             {props.error && <div className={s.commonError}> {props.error}</div>}
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