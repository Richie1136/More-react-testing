import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Input Component', () => {
  test('rendered input', () => {
    render(<Input showDiv={false} />)
    const input = screen.getByTestId('searchBar')
    expect(input).toBeInTheDocument()
  })
  test("render div", () => {
    render(<Input showDiv={true} />)
    const div = screen.getByTestId('divWeWantToShow')
    expect(div).toBeInTheDocument()
  })
  test("don't render div", () => {
    render(<Input showDiv={false} />)
    const div = screen.queryByTestId('divWeWantToShow')
    expect(div).not.toBeInTheDocument()
  })
  test("chnage on input causes change on header", async () => {
    render(<Input showDiv={true} />)
    const input = screen.getByTestId('searchBar')
    const header = screen.getByTestId('displaySearch')
    const inputWord = "Robert"
    await fireEvent.change(input, { target: { value: inputWord } })
    expect(header.innerHTML).toBe(inputWord)
  })
})