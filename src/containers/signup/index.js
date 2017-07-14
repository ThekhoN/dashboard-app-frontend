import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {signupUser, authErrorReset} from '../../actions/actionCreators';
import validateEmail from '../../modules/validateEmail';
import './style.css';
import {Redirect} from 'react-router-dom';

const renderField = ({
    input,
    label,
    type,
    placeholder,
    meta: {touched, error}
  }) => {
  return (
    <fieldset
      className='form-row'>
      <input
        className='form-input'
        {...input}
        name={label}
        placeholder={placeholder}
        type={type}
      />
      {touched && error && <p className='error-text-wrapper'><span className='form-error-text'>{error}</span></p>}
    </fieldset>
  );
};

export class Signup extends Component {
  componentDidMount () {
    this.props.handleResetFormError();
  }
  handleFormSubmit ({email, password}) {
    this.props.handleSignupUser({email, password});
  }
  render () {
    const {handleSubmit, errorMessage, authenticated, authLoading} = this.props;
    const submitButtonText = authLoading ? 'Signing up. . .' : 'Sign up';
    if (authenticated) {
      console.log('authenticated, you have successfully signed up!');
      return (<Redirect to='/user' />);
    }
    return (
      <div className='form-container-wrapper'>
        <div className='form-container'>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div className='row'>
              <Field
                type='email'
                name='email'
                placeholder='email'
                component={renderField}
                label='email'
              />
            </div>
            <div className='row'>
              <Field
                type='password'
                name='password'
                placeholder='password'
                component={renderField}
                label='password'
              />
            </div>
            <div className='row'>
              <Field
                type='password'
                name='passwordConfirm'
                placeholder='confirm password'
                component={renderField}
                label='confirm password'
              />
            </div>
            {errorMessage && <div className='form-error-text'>{errorMessage}</div>}
            <br />
            <div className='row'>
              <div className='form-row'>
                <button
                  className='form-submit-button'
                  type='submit'>{submitButtonText}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (formProps) => {
  let errors = {};
  if (!formProps.email) {
    errors.email = 'Required';
  }
  if (!validateEmail(formProps.email)) {
    errors.email = 'Invalid Email';
  }
  if (!formProps.password) {
    errors.password = 'Required';
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Password should match';
  }
  return errors;
};

const mapStateToProps = state => ({
  authLoading: state.auth.loading,
  errorMessage: state.auth.error,
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  handleSignupUser: ({email, password}) => {
    dispatch(signupUser({email, password}));
  },
  handleResetFormError: () => {
    dispatch(authErrorReset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signup',
  validate
})(Signup));
