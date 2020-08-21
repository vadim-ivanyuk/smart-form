import React from 'react'
import Field from '../Fields/Field'

const Avatar = (props) => {
    const { title, id, name, onChange, value, errors } = props
    return (
        <React.StrictMode>
            <img className='avatar-img' src={value} alt={name} />
            <Field
                id={id}
                title={title}
                type='file'
                onChange={onChange}
                name={name}
                error={errors.avatar}
            />
        </React.StrictMode>
    )
}

export default Avatar