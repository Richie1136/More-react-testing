import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input Component', () => {
  test('rendered input', () => {
    render(<Input showDiv={false} />)
    const input = screen.getByTestId('searchBar')
    expect(input).toBeTruthy()
  })
})