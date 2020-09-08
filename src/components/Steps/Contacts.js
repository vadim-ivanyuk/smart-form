import React from 'react'
import Field from '../Fields/Field'
import SelectField from '../Fields/SelectField'
import countries from '../../data/countries'
import cities from '../../data/cities'

export default class Contacts extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  getOptions = (items) => {
    return items.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      )
    })
  }

  getCitiesOptions = (cities) => {
    return cities
      .filter((item, index) => item.id == this.props.values.country)
      .map((item, index) => (
        <option key={index} value={item.name}>
          {item.name}
        </option>
      ))
  }

  render() {
    const { email, mobile, country, city } = this.props.values
    const { onChange, errors } = this.props

    return (
      <React.StrictMode>
        <Field
          id="email"
          title="Email: "
          name="email"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
          error={errors.email}
        />
        <Field
          id="mobile"
          title="Mobile: "
          name="mobile"
          type="text"
          placeholder="Enter mobile"
          value={mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <SelectField
          id="country"
          title="Country: "
          value={country}
          name="country"
          onChange={onChange}
          options={this.getOptions(countries)}
          error={errors.country}
        />
        <SelectField
          id="city"
          title="City: "
          value={city}
          name="city"
          onChange={onChange}
          options={this.getCitiesOptions(cities)}
          error={errors.city}
        />
        <div className="void-block"></div>
      </React.StrictMode>
    )
  }
}
