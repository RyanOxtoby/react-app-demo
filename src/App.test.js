import { render, screen } from '@testing-library/react'
import App from './App'

test('renders logo', () => {
    const { getByAltText } = render(<App />)

    const image = getByAltText('logo')

    expect(image.src).toContain('got')
})

test('renders display houses component', () => {
    render(<App />)
    const element = screen.getByTestId('displayHouses')
    expect(element).toBeInTheDocument()
})
