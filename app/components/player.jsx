// app/components/Player.jsx
import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-white m-4 transition-transform transform hover:scale-105">
      <img
        className="w-full h-64 object-cover rounded-t-lg"
        src={imageUrl}
        alt={name}
      />
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{name}</h2>
        <div className="text-gray-600 space-y-2">
          <p>
            <strong className="font-medium">Team:</strong> {team}
          </p>
          <p>
            <strong className="font-medium">Nationality:</strong> {nationality}
          </p>
          <p>
            <strong className="font-medium">Jersey Number:</strong> {jerseyNumber}
          </p>
          <p>
            <strong className="font-medium">Age:</strong> {age}
          </p>
        </div>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 'Unknown',
  age: 'Unknown',
  imageUrl: 'https://via.placeholder.com/300',
};

export default Player;
