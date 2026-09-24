import './PlayerCard.css';

function PlayerCard({ name, team, nationality, nationalityFlag, jerseyNumber, age, image, rating, position }) {
  return (
    <article className="fifa-card">
      <div className="fifa-card__header">
        <div className="fifa-card__rating">
          <span className="value">{rating}</span>
          <span className="position">{position}</span>
        </div>
        <div className="fifa-card__flag" title={nationality || 'Nationalité'}>
          {nationalityFlag || '🌍'}
        </div>
      </div>

      <div className="fifa-card__photo">
        <img src={image} alt={name} />
      </div>

      <div className="fifa-card__name">{name}</div>
      <div className="fifa-card__team">{team}</div>
      <div className="fifa-card__nation">{nationality}</div>

      <div className="fifa-card__stats">
        <div className="fifa-card__stat">
          <span className="stat-value">{jerseyNumber}</span>
          <span className="stat-label">N°</span>
        </div>
        <div className="fifa-card__stat">
          <span className="stat-value">{age}</span>
          <span className="stat-label">ÂGE</span>
        </div>
      </div>
    </article>
  );
}

export default PlayerCard;