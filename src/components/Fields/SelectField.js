import React from 'react'

const SelectField = (props) => {
  const { id, value, onChange, options, name, label, error } = props

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        className="form-control"
      >
        {options}
      </select>
      {error ? <div className="invalid-proparty">{error}</div> : null}
    </div>
  )
}

export default SelectField
