import React from 'react';
import StepsBlock from '../components/Steps'
import Basic from '../components/Basic'
import Contacts from '../components/Contacts'
import Avatar from '../components/Avatar'
import Finish from '../components/Finish'
import StepsButton from '../components/StepsButton'
import styled, { keyframes } from 'styled-components'
import { bounceInDown, bounceInUp, zoomIn } from 'react-animations'

const BounceInDown = styled.div`animation: 1s ${keyframes`${bounceInDown}`}`
const BounceInUp = styled.div`animation: 1s ${keyframes`${bounceInUp}`}`
const ZoomIn = styled.div`animation: 0.5s ${keyframes`${zoomIn}`}`

class MainForm extends React.Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            secondName: '',
            password: '',
            repeatPassword: '',
            gender: 'male',
            step: 1,
            email: '',
            mobile: '',
            country: '',
            city: '',
            avatar: 'avatar.png',
            errors: {}
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeAvatar = e => {
        const reader = new FileReader()
        reader.onload = (e) => {
            this.setState({ avatar: e.target.result })
        }

        reader.readAsDataURL(e.target.files[0])
    }

    resetForm = (e) => {
        this.setState({
            step: 1,
            firstName: "",
            secondName: "",
            password: "",
            repeatPassword: "",
            gender: "male",
            email: "",
            mobile: "",
            country: "",
            city: "",
            avatar: '/avatar.png',
            errors: {
                firstName: "",
                secondName: "",
                password: "",
                repeatPassword: "",
                age: "",
                email: "",
                mobile: "",
                location: ""
            }
        });
    }

    onSubmit = e => {
        e.preventDefault()
    }

    checkErrors = e => {
        const {
            step,
            firstName,
            secondName,
            password,
            repeatPassword,
            email,
            mobile,
            country,
            avatar,
            city
        } = this.state

        const errors = {}

        switch (step) {
            case 1:
                if (firstName.length < 5) {
                    errors.firstName = 'Must be 5 characters or more';
                }
                if (secondName.length < 5) {
                    errors.secondName = 'Must be 5 characters or more';
                }
                if (password.length < 8) {
                    errors.password = 'Must be 8 characters or more';
                }
                if (repeatPassword !== password) {
                    errors.repeatPassword = 'Must be equal passwords';
                }
                break;

            case 2:
                const emailRegex = new RegExp(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );

                const mobileRegex = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/gm);

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
                break;

            case 3:
                if (avatar === '/avatar.png') {
                    errors.avatar = 'Required'
                }
                break;

            default:
        }

        return errors;
    }

    nextStep = (e) => {

        const errors = this.checkErrors()

        if (Object.keys(errors).length > 0) {
            this.setState({
                errors
            })
        }
        else {
            this.setState((state) => ({
                step: state.step + 1,
                errors: {}
            }))
        }
    }

    prevStep = (e) => {
        this.setState((state) => ({
            step: state.step - 1,
        }))
    }

    render() {
        return (
            <div className='main-block'>
                <BounceInDown>
                    <StepsBlock step={this.state.step} />
                </BounceInDown>
                <form className="form-default">
                    {this.state.step === 1 ? (
                        <ZoomIn>
                            <Basic
                                firstName={this.state.firstName}
                                secondName={this.state.secondName}
                                password={this.state.password}
                                repeatPassword={this.state.repeatPassword}
                                gender={this.state.gender}
                                onChange={this.onChange}
                                errors={this.state.errors}
                            />
                        </ZoomIn>
                    ) : null}
                    {this.state.step === 2 ? (
                        <ZoomIn>
                            <Contacts
                                email={this.state.email}
                                mobile={this.state.mobile}
                                country={this.state.country}
                                city={this.state.city}
                                onChange={this.onChange}
                                errors={this.state.errors}
                            />
                        </ZoomIn>
                    ) : null}
                    {this.state.step === 3 ? (
                        <ZoomIn>
                            <Avatar
                                title='Avatar: '
                                id='avatar'
                                value={this.state.avatar}
                                name='avatar'
                                onChange={this.onChangeAvatar}
                                errors={this.state.errors}
                            />
                        </ZoomIn>
                    ) : null}
                </form>
                {this.state.step === 4 ? (
                    <ZoomIn>
                        <Finish
                            avatar={this.state.avatar}
                            firstName={this.state.firstName}
                            secondName={this.state.secondName}
                            mobile={this.state.mobile}
                            email={this.state.email}
                            country={this.state.country}
                            city={this.state.city}
                        />
                    </ZoomIn>
                ) : null}
                <BounceInUp>
                    <StepsButton resetForm={this.resetForm} prevStep={this.prevStep} nextStep={this.nextStep} step={this.state.step} />
                </BounceInUp>
            </div>
        );
    }
}

export default MainForm;