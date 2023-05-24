import "./SelectPlayer.css";
import {Col, Row} from "react-bootstrap";

const SelectPlayerItem = props => {
    const setIdAndNameString = () => {
        props.setPlayerSelectedId(props.id);
        props.setInputPlayerName(props.name);
    }

    return(
        <Row onClick={() => setIdAndNameString()} className="select-player-row py-2">
            <Col xs={7}>
                {props.name}
            </Col>
            <Col xs={2}>
                {props.position}
            </Col>
            <Col xs={3}>
                {props.team}
            </Col>
        </Row>
    )
}

export default SelectPlayerItem;