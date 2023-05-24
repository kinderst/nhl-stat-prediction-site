import {fetchData} from "./databaseCalls";
import {Line} from "react-chartjs-2";
import {useEffect, useState} from "react";
import {Form} from 'react-bootstrap';

import {initialOptions, initialData} from "./helpers";

const Graph = props => {
    const [options, setOptions] = useState(initialOptions);
    const [data, setData] = useState(initialData);
    const [showDataByIceHour, setShowDataByIceHour] = useState(false);

    useEffect(() => {
        fetchData(props.playerSelectedId, setData, setOptions, showDataByIceHour, props.inputColumnSelected, props.inputPlayerName).then(r => console.log('r: ', r));
    }, [props.playerSelectedId, props.inputColumnSelected, showDataByIceHour])
    return(
        <div className="text-start">
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Show Data By Icehour"
                onChange={e => setShowDataByIceHour(e.target.checked)}
                checked={showDataByIceHour}
            />
            <Line options={options} data={data} />
        </div>
    )
}

export default Graph;