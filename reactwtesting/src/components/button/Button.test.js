import { getAllByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button Component', () => {
  test('rendered button', () => {
    render(<Button />)
    const input = screen.getByTestId('button')
    expect(input).toBeInTheDocument()
  })
  test('rendered one button before click', () => {
    render(<Button />)
    const buttonList = screen.getAllByTestId("button")
    expect(buttonList).toHaveLength(1)
  })
  test('render 2 buttons after click', async () => {

    render(<Button />)
    const buttonList = screen.getAllByTestId("button")
    await userEvent.click(buttonList[0])
    expect(screen.getAllByTestId("button")).toHaveLength(2)
  })
})