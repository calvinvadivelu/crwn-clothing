import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styling.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await  createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password:'',
                confirmPassword:''                
            })

        } catch(error){
            console.error(error);
        }
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} handleChange={this.handleChange} required label="full name"/>
                    <FormInput type="email" name="email" value={email} handleChange={this.handleChange} required label="email"/>
                    <FormInput type="password" name="password" value={password} handleChange={this.handleChange} required label="password"/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} handleChange={this.handleChange} required label="confirm password"/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </div>
        );
    }
}

export default SignUp;