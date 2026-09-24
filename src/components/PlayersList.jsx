import PlayerCard from './PlayerCard';

function PlayersList({ players }) {
  return (
    <div className="player-grid">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          nationalityFlag={player.nationalityFlag}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
          rating={player.rating}
          position={player.position}
        />
      ))}
    </div>
  );
}

export default PlayersList;
