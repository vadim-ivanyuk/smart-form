import React from 'react'

class StepsButton extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="steps-block button-steps" >
                {
                    this.props.step < 4 ? (
                        <React.StrictMode>
                            <button className='btn btn-default' disabled={this.props.step === 1 ? true : false} onClick={this.props.prevStep}>Prev</button>
                            <button className='btn btn-default btn-next' onClick={this.props.nextStep}>Next</button>
                        </React.StrictMode>
                    ) : (
                            <React.StrictMode>
                                <button className='btn btn-default btn-next' type='reset' onClick={this.props.resetForm}>Reset</button>
                            </React.StrictMode>
                        )
                }
            </div>
        )
    }
}

export default StepsButton