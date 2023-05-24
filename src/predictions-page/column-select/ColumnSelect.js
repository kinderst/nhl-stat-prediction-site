import {Button, Col, Row} from "react-bootstrap";

import {columnNames} from "./helpers";

const OptionsSelectColumn = props => {

    const columnRows = columnNames.map(colGroup => {
        const rowItems = colGroup.map(colName => {
            return (
                <Col className='m-0 p-0'>
                    <Button size="sm" >{String(colName)}</Button>
                </Col>
            );
        });

        return (
            <Row>
                {rowItems}
            </Row>
        );

    })

    return(
        <>
            {columnRows}
        </>
    )
}

export default OptionsSelectColumn;