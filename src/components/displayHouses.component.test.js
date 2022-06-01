import { render, screen } from '@testing-library/react'
import DisplayHouses from './displayHouses.component'

it('renders headers in table', () => {
    render(<DisplayHouses houses={[]} />)
    let element = screen.getByText('House Name')
    expect(element).toBeInTheDocument()

    element = screen.getByText('Region')
    expect(element).toBeInTheDocument()

    element = screen.getByText('Current Lord')
    expect(element).toBeInTheDocument()

    element = screen.getByText('Words')
    expect(element).toBeInTheDocument()
})

it('renders name of all houses in table', () => {
    const expectedValue1 = 'House 1'
    const expectedValue2 = 'House 2'

    render(
        <DisplayHouses
            houses={[{ Name: expectedValue1 }, { Name: expectedValue2 }]}
        />
    )

    let element = screen.getByText(expectedValue1)
    expect(element).toBeInTheDocument()

    element = screen.getByText(expectedValue2)
    expect(element).toBeInTheDocument()
})

it('renders region of all houses in table', () => {
    const houseName1 = 'House 1'
    const houseName2 = 'House 2'
    const expectedValue1 = 'Region 1'
    const expectedValue2 = 'Region 2'

    render(
        <DisplayHouses
            houses={[
                { Name: houseName1, Region: expectedValue1 },
                { Name: houseName2, Region: expectedValue2 },
            ]}
        />
    )

    let element = screen.getByText(expectedValue1)
    expect(element).toBeInTheDocument()

    element = screen.getByText(expectedValue2)
    expect(element).toBeInTheDocument()
})

it('renders current lord of all houses in table', () => {
    const houseName1 = 'House 1'
    const houseName2 = 'House 2'
    const expectedValue1 = 'Current Lord 1'
    const expectedValue2 = 'Current Lord 2'

    render(
        <DisplayHouses
            houses={[
                { Name: houseName1, Region: expectedValue1 },
                { Name: houseName2, Region: expectedValue2 },
            ]}
        />
    )

    let element = screen.getByText(expectedValue1)
    expect(element).toBeInTheDocument()

    element = screen.getByText(expectedValue2)
    expect(element).toBeInTheDocument()
})

it('renders words of all houses in table', () => {
    const houseName1 = 'House 1'
    const houseName2 = 'House 2'
    const expectedValue1 = 'Current Lord 1'
    const expectedValue2 = 'Current Lord 2'

    render(
        <DisplayHouses
            houses={[
                { Name: houseName1, Region: expectedValue1 },
                { Name: houseName2, Region: expectedValue2 },
            ]}
        />
    )

    let element = screen.getByText(expectedValue1)
    expect(element).toBeInTheDocument()

    element = screen.getByText(expectedValue2)
    expect(element).toBeInTheDocument()
})
