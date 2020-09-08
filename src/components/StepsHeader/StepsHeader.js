import React from 'react'
import classNames from 'classnames'

class StepsBlock extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  step = (val) => {
    return classNames(
      this.props.step === val ? 'steps-block-item step' : 'steps-block-item'
    )
  }
  render() {
    return (
      <div className="steps-block">
        <div className={this.step(1)}>
          <div>1</div>
          <p>Basic</p>
        </div>
        <div className={this.step(2)}>
          <div>2</div>
          <p>Contacts</p>
        </div>
        <div className={this.step(3)}>
          <div>3</div>
          <p>Avatar</p>
        </div>
        <div className={this.step(4)}>
          <div>4</div>
          <p>Finish</p>
        </div>
      </div>
    )
  }
}

export default StepsBlock
