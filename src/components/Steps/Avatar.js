import React from 'react'
import Field from '../Fields/Field'

const Avatar = (props) => {
  const { title, id, name, onChange, value, errors } = props

  const onChangeAvatar = (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      onChange({
        target: {
          name: 'avatar',
          value: e.target.result,
        },
      })
    }

    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <React.StrictMode>
      <img className="avatar-img" src={value} alt={name} />
      <Field
        id={id}
        title={title}
        type="file"
        onChange={onChangeAvatar}
        name={name}
        error={errors.avatar}
      />
    </React.StrictMode>
  )
}

export default Avatar
