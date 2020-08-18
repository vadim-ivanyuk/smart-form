import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import countries from '../data/countries'
import cities from '../data/cities'

const Finish = (props) => {
    const { avatar, firstName, secondName, mobile, country, email, city } = props
    const resultCountry = countries.find(item => item.id === +country)
    return (
        <div className='main-finish-block'>
            <div>
                <img className='main-finish-block--img' src={avatar} alt={firstName + ' ' + secondName} />
            </div>
            <div>
                <p className='main-finish-block--titleP'>{firstName} {secondName}</p>
                <p><FontAwesomeIcon icon={faPhoneAlt} className='icon' /> - <a href={`tel:${mobile}`}>{mobile}</a></p>
                <p><FontAwesomeIcon icon={faEnvelope} className='icon' /> - <a href={`mailto:${email}`}>{email}</a></p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /> - {resultCountry.name}, {cities[city].name}</p>
            </div>
        </div>
    )
}

export default Finish