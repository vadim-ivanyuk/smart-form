import React from 'react'
import Field from './Fields/Field'
import SelectField from './Fields/SelectField'
import countries from '../data/countries'
import cities from '../data/cities'

class Contacts extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    getOptionsItems = (items) => {
        return items.map((item) => {
            return <option key={item.id} value={item.id}>{item.name}</option>
        })
    }

    getCitiesOptions = (cities) => {
        const filteredCities = Object.entries(cities).filter(
            el => el[1].country === Number(this.props.country)
        );
        return this.getOptionsItems(
            filteredCities.map(([id, city]) => ({
                id,
                name: city.name
            }))
        );
    }

    render() {

        const { email, mobile, onChange, errors, country, city } = this.props

        return (
            <React.StrictMode>
                <Field
                    id='email'
                    title='Email: '
                    name='email'
                    type='text'
                    placeholder='Enter email'
                    value={email}
                    onChange={onChange}
                    error={errors.email}
                />
                <Field
                    id='mobile'
                    title='Mobile: '
                    name='mobile'
                    type='text'
                    placeholder='Enter mobile'
                    value={mobile}
                    onChange={onChange}
                    error={errors.mobile}
                />
                <SelectField
                    id='country'
                    title='Country: '
                    value={country}
                    name='country'
                    onChange={onChange}
                    options={this.getOptionsItems(countries)}
                    error={errors.country}
                />
                <SelectField
                    id='city'
                    title='City: '
                    value={city}
                    name='city'
                    onChange={onChange}
                    options={this.getCitiesOptions(cities)}
                    error={errors.city}
                />
                <div className="void-block"></div>
            </React.StrictMode>
        )
    }
}

export default Contacts