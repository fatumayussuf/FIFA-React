// app/components/PlayersList.jsx
import React from 'react';
import Player from './Player';
import players from '../data/players';

const PlayersList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
