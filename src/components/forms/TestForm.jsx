import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TestForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props;

  return (

    <form onSubmit={handleSubmit}>

      <div>
        <label>Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <label>Radio</label>
        <div>
          <label>
            <Field
              name="radio"
              component="input"
              type="radio"
              value="value1"
            />{' '}
            value1
          </label>
          <label>
            <Field
              name="radio"
              component="input"
              type="radio"
              value="value2"
            />{' '}
            value2
          </label>
        </div>
      </div>

      <div>
        <label>Dropdown</label>
        <div>
          <Field name="dropdown" component="select">
            <option />
            <option value="ff0000">opt 1</option>
            <option value="00ff00">opt 2</option>
            <option value="0000ff">opt 3</option>
          </Field>
        </div>
      </div>

      <div>
        <label htmlFor="employed">Checkbox</label>
        <div>
          <Field
            name="checkbox"
            id="checkbox"
            component="input"
            type="checkbox"
          />
        </div>
      </div>

      <div>
        <label>Description</label>
        <div>
          <Field name="description" component="textarea" />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(TestForm)
