import SelectPlayerInput from "./SelectPlayerInput";
import SelectPlayerItem from "./SelectPlayerItem";

import players from '../../players.json'

const SelectPlayer = props => {
    const playerItems = [];
    if (props.inputPlayerName.length > 3) {
        for (const playerId in players) {
            const player = players[playerId];
            if (player.name.toLowerCase().includes(props.inputPlayerName.toLowerCase())) {
                playerItems.push(
                    <SelectPlayerItem
                        id={playerId}
                        name={player.name}
                        position={player.position}
                        team={player.team}
                        setPlayerSelectedId={props.setPlayerSelectedId}
                        setInputPlayerName={props.setInputPlayerName}
                    />
                );
            }
            if (playerItems.length > 5) {
                break
            }
        }
    }

    //const playerItems = null;
    return (
        <div>
            <SelectPlayerInput
                inputPlayerName={props.inputPlayerName}
                setInputPlayerName={props.setInputPlayerName}
            />

            {playerItems}
        </div>
    )
}

export default SelectPlayer;