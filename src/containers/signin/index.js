import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, stopSubmit} from 'redux-form';
import {signinUser, authLoading} from '../../actions/actionCreators';
import './style.css';

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
    </fieldset>);
};

export class Signin extends Component {
  handleFormSubmit ({email, password}) {
    this.props.handleSigninUser({email, password});
    // this.props.handleAuthLoading();
  }
  render () {
    const {handleSubmit, errorMessage} = this.props;
    return (
      <div className='form-container'>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className='row'>
            <Field
              type='text'
              name='email'
              placeholder='email'
              component={renderField}
              label='email'
            />
          </div>
          <div className='row'>
            <Field
              className='form-row'
              type='password'
              name='password'
              placeholder='password'
              component={renderField}
              label='password'
            />
          </div>
          {errorMessage && <div className='form-error-text'>{errorMessage}</div>}
          <br />
          <div className='row'>
            <div className='form-row'>
              <button
                className='form-submit-button'
                type='submit'>Sign in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (formProps) => {
  let errors = {};
  if (!formProps.email) {
    errors.email = 'Required';
  }
  if (!formProps.password) {
    errors.password = 'Required';
  }
  return errors;
};

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  handleAuthLoading: () => {
    dispatch(authLoading());
  },
  handleSigninUser: ({email, password}) => {
    dispatch(signinUser({email, password}));
  },
  handleResetFormError: () => {
    dispatch(stopSubmit('signin', {}));
    dispatch(stopSubmit('signup', {}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signin',
  validate
})(Signin));
