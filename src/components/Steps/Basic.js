import React from 'react'
import Field from '../Fields/Field'

class Basic extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const {
      firstName,
      secondName,
      password,
      repeatPassword,
      gender,
    } = this.props.values
    const { onChange, errors } = this.props
    return (
      <>
        <Field
          id="firstName"
          label="First Name: "
          name="firstName"
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={onChange}
          error={errors.firstName}
        />
        <Field
          id="secondName"
          label="Second Name: "
          name="secondName"
          type="text"
          placeholder="Enter second name"
          value={secondName}
          onChange={onChange}
          error={errors.secondName}
        />
        <Field
          id="password"
          label="Password: "
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={onChange}
          error={errors.password}
        />
        <Field
          id="repeatPassword"
          label="Repeat password: "
          name="repeatPassword"
          type="password"
          placeholder="Repeat password"
          value={repeatPassword}
          onChange={onChange}
          error={errors.repeatPassword}
        />
        <div className="form-group">
          <label htmlFor="country">Gender: </label>
          <div className="form-check">
            <input
              type="radio"
              className="mr-2"
              id="male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={onChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="mr-2"
              id="female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={onChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </>
    )
  }
}

export default Basic
