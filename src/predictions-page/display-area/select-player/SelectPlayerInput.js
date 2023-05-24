import {InputGroup, Form, Row} from "react-bootstrap";

const SelectPlayerInput = props => {
    return (
        <Row className="text-start">
            <Form.Label htmlFor="basic-url">Player Name</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search Player Name"
                    aria-label="Search Player Name"
                    aria-describedby="basic-addon2"
                    onChange={e => props.setInputPlayerName(e.target.value)}
                    value={props.inputPlayerName}
                />
                <InputGroup.Text id="basic-addon2" onClick={() => props.setInputPlayerName('')}>Clear</InputGroup.Text>
            </InputGroup>
        </Row>
    )
}

export default SelectPlayerInput;