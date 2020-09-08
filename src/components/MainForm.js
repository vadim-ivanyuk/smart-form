import React from 'react'
import StepsBlock from './StepsHeader/StepsHeader'
import Basic from './Steps/Basic'
import Contacts from './Steps/Contacts'
import Avatar from './Steps/Avatar'
import Finish from './Steps/Finish'
import StepsButton from './StepsButton/StepsButton'
import styled, { keyframes } from 'styled-components'
import { bounceInDown, bounceInUp, zoomIn } from 'react-animations'

const BounceInDown = styled.div`
  animation: 1s ${keyframes`${bounceInDown}`};
`
const BounceInUp = styled.div`
  animation: 1s ${keyframes`${bounceInUp}`};
`
const ZoomIn = styled.div`
  animation: 0.5s ${keyframes`${zoomIn}`};
`

const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const mobileRegex = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/gm)

class MainForm extends React.Component {
  constructor() {
    super()

    this.state = {
      values: {
        firstName: '',
        secondName: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        mobile: '',
        country: '1',
        city: '',
        avatar: 'avatar.png',
      },
      errors: {},
      step: 1,
    }
  }

  onChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    })
  }

  resetForm = (e) => {
    this.setState({
      values: {
        firstName: '',
        secondName: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        mobile: '',
        country: '1',
        city: '',
        avatar: 'avatar.png',
      },
      step: 1,
      errors: {
        firstName: '',
        secondName: '',
        password: '',
        repeatPassword: '',
        age: '',
        email: '',
        mobile: '',
        location: '',
      },
    })
  }

  checkErrors = (e) => {
    const {
      firstName,
      secondName,
      password,
      repeatPassword,
      email,
      mobile,
      country,
      avatar,
      city,
    } = this.state.values

    const { step } = this.state

    const errors = {}

    switch (step) {
      case 1:
        if (firstName.length < 5) {
          errors.firstName = 'Must be 5 characters or more'
        }
        if (secondName.length < 5) {
          errors.secondName = 'Must be 5 characters or more'
        }
        if (password.length < 8) {
          errors.password = 'Must be 8 characters or more'
        }
        if (repeatPassword !== password) {
          errors.repeatPassword = 'Must be equal passwords'
        }
        break

      case 2:
        if (!emailRegex.test(email)) {
          errors.email = 'Invalid email address'
        }

        if (!mobileRegex.test(mobile)) {
          errors.mobile = 'Invalid mobile number'
        }

        if (!country || country === 0) {
          errors.country = 'Required'
        }

        if (!city || city === 0) {
          errors.city = 'Required'
        }
        break

      case 3:
        if (avatar === 'avatar.png') {
          errors.avatar = 'Required'
        }
        break

      default:
    }

    return errors
  }

  nextStep = (e) => {
    e.preventDefault()

    const errors = this.checkErrors()

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      })
    } else {
      this.setState((state) => ({
        step: state.step + 1,
        errors: {},
      }))
    }
  }

  prevStep = (e) => {
    this.setState((state) => ({
      step: state.step - 1,
    }))
  }

  render() {
    const { step, errors, values } = this.state
    return (
      <div className="main-block">
        <BounceInDown>
          <StepsBlock step={step} />
        </BounceInDown>
        <form className="form-default">
          {step === 1 && (
            <ZoomIn>
              <Basic values={values} onChange={this.onChange} errors={errors} />
            </ZoomIn>
          )}
          {step === 2 && (
            <ZoomIn>
              <Contacts
                values={values}
                onChange={this.onChange}
                errors={errors}
              />
            </ZoomIn>
          )}
          {step === 3 && (
            <ZoomIn>
              <Avatar
                title="Avatar: "
                id="avatar"
                value={this.state.values.avatar}
                name="avatar"
                onChange={this.onChange}
                errors={errors}
              />
            </ZoomIn>
          )}
        </form>
        {step === 4 && (
          <ZoomIn>
            <Finish values={values} />
          </ZoomIn>
        )}
        <BounceInUp>
          <StepsButton
            resetForm={this.resetForm}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            step={step}
          />
        </BounceInUp>
      </div>
    )
  }
}

export default MainForm
