// app/routes/index.jsx
import React from 'react';
import PlayersList from '../components/PlayersList';

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Famous Football Players</h1>
      <PlayersList />
    </div>
  );
}
