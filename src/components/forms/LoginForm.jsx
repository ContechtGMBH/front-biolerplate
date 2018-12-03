import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { email } from './constants/validation.js'

const renderField = ({ input, label, type, meta: { touched, error } }) => (

  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>

)

const LoginForm = props => {
  const { error, handleSubmit, submitting, pristine, valid } = props

  return (

    <form onSubmit={handleSubmit}>

      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
      />

      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />

      {error && <strong>{error}</strong>}

      <div>
        <button type="submit" disabled={submitting || pristine || !valid}>
          Log In
        </button>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'loginForm' // a unique identifier for this form
})(LoginForm)
