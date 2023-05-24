import {Button, Col, Row} from "react-bootstrap";

const SelectColumn = props => {
    const columnNames = [
        [
            'icetime',
            'I_F_primaryAssists', 'I_F_secondaryAssists',
            'I_F_shotsOnGoal', 'I_F_shotAttempts',
            'I_F_goals', 'I_F_rebounds',
            'I_F_freeze', 'I_F_playStopped'
        ],
        [
            'I_F_playContinuedInZone', 'I_F_playContinuedOutsideZone',
            'I_F_hits', 'I_F_takeaways',
            'I_F_giveaways', 'I_F_dZoneGiveaways',
            'I_F_oZoneShiftStarts', 'I_F_dZoneShiftStarts'
        ],
        [
            'I_F_neutralZoneShiftStarts', 'I_F_flyShiftStarts',
            'I_F_oZoneShiftEnds', 'I_F_dZoneShiftEnds',
            'I_F_neutralZoneShiftEnds', 'I_F_flyShiftEnds',
            'OnIce_F_shotsOnGoal', 'OnIce_F_shotAttempts'
        ],
        [
            'OnIce_F_goals', 'OnIce_F_rebounds',
            'OnIce_F_reboundGoals', 'OnIce_A_shotsOnGoal',
            'OnIce_A_shotAttempts', 'OnIce_A_goals',
            'OnIce_A_rebounds', 'OnIce_A_reboundGoals'
        ]
    ];

    const columnRows = columnNames.map(colGroup => {
        const rowItems = colGroup.map(colName => {
            let btn = (<Button size="sm">{colName}</Button>);
            if (String(props.inputColumnSelected) === String(colName)) {
                btn = (<Button size="sm" variant='success'>{colName}</Button>)
            }
            return (
                <Row className='m-0 p-0'>
                    <div className="d-grid py-1" onClick={() => props.setInputColumnSelected(colName)}>
                        {btn}
                    </div>
                </Row>
            )
        })
        return (
            <Col xs={12} sm={6} md={4} lg={3}>
                {rowItems}
            </Col>
        )

    })

    return(
        <Row className='pt-4'>
            {columnRows}
        </Row>
    )
}

export default SelectColumn;