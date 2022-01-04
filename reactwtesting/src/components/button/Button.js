import React, { useState } from 'react'

const Button = () => {
  const [showAnotherButton, setShowAnotherButton] = useState(false)

  const handleClick = () => {
    setShowAnotherButton(true)
  }
  return (
    <div>
      <button
        data-testid='button'
        onClick={handleClick}>
        Click here
      </button>
      {showAnotherButton && (
        <button data-testid='button'>Click Here</button>
      )}
    </div>
  )
}

export default Button
