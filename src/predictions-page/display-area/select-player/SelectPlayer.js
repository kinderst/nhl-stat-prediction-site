import SelectPlayerInput from "./SelectPlayerInput";
import SelectPlayerItem from "./SelectPlayerItem";

import players from '../../players.json'

const SelectPlayer = props => {
    let playerItems = [];
    if (props.inputPlayerName.length > 3) {
        for (const playerId in players) {
            const player = players[playerId];
            if (player.name.toLowerCase().includes(props.inputPlayerName.toLowerCase())) {
                playerItems.push(
                    <SelectPlayerItem
                        id={playerId}
                        birthday={player.birthDate}
                        name={player.name}
                        position={player.position}
                        team={player.team}
                        setPlayerSelectedId={props.setPlayerSelectedId}
                        setInputPlayerName={props.setInputPlayerName}
                    />
                );
            }
            if (playerItems.length > 30) {
                break
            }
        }
    }
    playerItems.sort((a, b) => {
        const propertyA = a.props.birthday;
        const propertyB = b.props.birthday;

        if (propertyA > propertyB) {
            return -1;
        }

        if (propertyA < propertyB) {
            return 1;
        }

        return 0;
    });
    playerItems = playerItems.splice(0,5);
    console.log(playerItems)

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