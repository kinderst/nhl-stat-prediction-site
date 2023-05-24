import {Col, Row} from "react-bootstrap";
import SelectPlayer from "./select-player/SelectPlayer";
import SelectColumn from "../select-column/SelectColumn";
import Graph from "./graph/Graph";

const DisplayArea = props => {
    return(
        <Row>
            <Col xs={12} sm={12} md={12} lg={4}>
                <SelectPlayer
                    setPlayerSelectedId={props.setPlayerSelectedId}
                    inputPlayerName={props.inputPlayerName}
                    setInputPlayerName={props.setInputPlayerName}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8}>
                <Graph
                    inputPlayerName={props.inputPlayerName}
                    playerSelectedId={props.playerSelectedId}
                    inputColumnSelected={props.inputColumnSelected}
                />
            </Col>
        </Row>
    )
}

export default DisplayArea;