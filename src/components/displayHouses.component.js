import React from 'react'
import Table from 'react-bootstrap/Table'

export default function DisplayHouses(props) {
    return (
        <Table striped bordered hover variant="dark" data-testid={props.testid}>
            <thead>
                <tr>
                    <th>House Name</th>
                    <th>Region</th>
                    <th>Current Lord</th>
                    <th>Words</th>
                </tr>
            </thead>
            <tbody>
                {props.houses.map((house) => {
                    return (
                        <tr key={house.Name}>
                            <td>{house.Name}</td>
                            <td>{house.Region}</td>
                            <td>{house.CurrentLord}</td>
                            <td>{house.Words}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
