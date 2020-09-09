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

  getOptions = (items) =>
    items.map((item, index) => (
      <option key={index} value={item.id}>
        {item.name}
      </option>
    ))

  getCitiesOptions = (cities) => {
    const { country } = this.props.values
    let citiesForCurrentCountry = []

    Object.values(cities).forEach((city) => {
      if (city.country === Number(country)) {
        citiesForCurrentCountry.push(city.name)
      }
    })

    return citiesForCurrentCountry.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))
  }

  render() {
    const { email, mobile, country, city } = this.props.values
    const { onChange, errors } = this.props

    return (
      <>
        <Field
          id="email"
          label="Email: "
          name="email"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
          error={errors.email}
        />
        <Field
          id="mobile"
          label="Mobile: "
          name="mobile"
          type="text"
          placeholder="Enter mobile"
          value={mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <SelectField
          id="country"
          label="Country: "
          value={country}
          name="country"
          onChange={onChange}
          options={this.getOptions(countries)}
          error={errors.country}
        />
        <SelectField
          id="city"
          label="City: "
          value={city}
          name="city"
          onChange={onChange}
          options={this.getCitiesOptions(cities)}
          error={errors.city}
        />
        <div className="void-block"></div>
      </>
    )
  }
}
