import React from 'react'

const Field = (props) => {
    const { id, name, title, type, placeholder, value, onChange, error } = props

    return (
        <div className={type !== 'file' ? 'form-group' : 'avatar-title-block'}>
            <label className="form-label-title" htmlFor={id}>{title}</label>
            <input
                id={id}
                type={type}
                className={type !== 'file' ? `input form-control ${error ? 'error' : ''}` : null}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange} />
            {error
                ?
                <div className="invalid-proparty">{error}</div>
                : null}
        </div>
    )
}

export default Field