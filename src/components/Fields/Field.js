import React from 'react'

const Field = (props) => {
    const { id, name, label, type, placeholder, value, onChange, error } = props

    return (
        <div className={type !== 'file' ? 'form-group' : 'avatar-title-block'}>
            <label className="form-label-title" htmlFor={id}>{label}</label>
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