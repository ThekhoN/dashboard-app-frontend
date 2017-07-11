import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, stopSubmit} from 'redux-form';
import {signinUser} from '../../actions/actionCreators';
import styles from './style.css';

const renderField = ({
    input,
    label,
    type,
    placeholder,
    meta: {touched, error}
  }) => {
  return (
    <fieldset>
      <input
        {...input}
        name={label}
        placeholder={placeholder}
        type={type}
      />
      {touched && error && <span className='error-text'>{error}</span>}
    </fieldset>);
};

export class Signin extends Component {
  componentDidMount () {
    // console.log('reset all errors in signin');
    // this.props.handleResetFormError();
  }
  handleFormSubmit ({email, password}) {
    // console.log('submitting signin: ', {email, password});
    this.props.handleSigninUser({email, password});
  }
  render () {
    const {handleSubmit, errorMessage} = this.props;
    return (
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            type='text'
            name='email'
            placeholder='email'
            component={renderField}
            label='email'
          />
          <Field
            type='password'
            name='password'
            placeholder='password'
            component={renderField}
            label='password'
          />
          {errorMessage && <div className={styles.errorText}>{errorMessage}</div>}
          <br />
          <button type='submit'>Sign in</button>
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
