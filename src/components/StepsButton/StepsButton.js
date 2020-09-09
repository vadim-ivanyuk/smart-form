import React from 'react'

const StepsButton = (props) => {
  const { step, prevStep, nextStep, resetForm } = props
  return (
    <div className="steps-block button-steps">
      {step < 4 ? (
        <>
          <button
            className="btn btn-default"
            type="button"
            disabled={step === 1}
            onClick={prevStep}
          >
            Prev
          </button>
          <button
            className="btn btn-default btn-next"
            type="submit"
            onClick={nextStep}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn-default btn-next"
            type="button"
            onClick={resetForm}
          >
            Reset
          </button>
        </>
      )}
    </div>
  )
}

export default StepsButton
