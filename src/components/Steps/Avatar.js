import React from 'react'
import Field from '../Fields/Field'
import defaultAvatar from '../../images/avatar.png'

const Avatar = (props) => {
  const { onChange, values, errors } = props

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
    <>
      <img className="avatar-img" src={values.avatar || defaultAvatar} alt="" />
      <Field
        id="avatar"
        label="Avatar: "
        type="file"
        onChange={onChangeAvatar}
        name="avatar"
        error={errors.avatar}
      />
    </>
  )
}

export default Avatar
