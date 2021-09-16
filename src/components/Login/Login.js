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
            
            <label htmlFor="email" className={s.label}>Email: <i>olegmaltewic@gmail.com</i></label>
            <Field placeholder="email (copy the value from above)" component={Input} 
            name="email" id="email" 
            validate={[requiredField]} />

            <label htmlFor="password" className={s.label}>Password: <i>password</i></label>
            <Field placeholder="password (copy the value from above)" component={Input}
             name="password" id="password" type="password" value="free"
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