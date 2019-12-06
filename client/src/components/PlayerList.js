import React from 'react';
import Player from './Player';

const PlayerList = props => {
    return (
        <div>
            <ul>
                {props.players.map(player => {
                    return (
                        <Player 
                        id={player.id}
                        name={player.name}
                        country={player.country}
                        searches={player.searches}
                        key={player.id}
                        />
                        )
                    })}
            </ul>
        </div>
    )
}

export default PlayerList;