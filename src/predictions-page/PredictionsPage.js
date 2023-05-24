import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

import {fetchData} from "./display-area/graph/databaseCalls";
import {useState} from "react";
import {initialOptions, initialData} from "./display-area/graph/helpers";
import {Container} from "react-bootstrap";
import SelectColumn from "./select-column/SelectColumn";
import DisplayArea from "./display-area/DisplayArea";

import players from './playersByName.json';

const PredictionsPage = props => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    // const [inputPlayerName, setInputPlayerName] = useState('');
    //
    // const [options, setOptions] = useState(initialOptions);
    // const [data, setData] = useState(initialData);

    const [inputPlayerName, setInputPlayerName] = useState('');
    const [inputColumnSelected, setInputColumnSelected] = useState('icetime');

    const [playerSelectedId, setPlayerSelectedId] = useState(null);


    return (
        <Container className='mt-4'>

            <DisplayArea
                inputPlayerName={inputPlayerName}
                setInputPlayerName={setInputPlayerName}
                inputColumnSelected={inputColumnSelected}
                playerSelectedId={playerSelectedId}
                setPlayerSelectedId={setPlayerSelectedId}
            />

            <SelectColumn
                inputColumnSelected={inputColumnSelected}
                setInputColumnSelected={setInputColumnSelected}
            />

        </Container>
    );
}

export default PredictionsPage;
