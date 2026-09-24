import Card from 'react-bootstrap/Card';

function MatchCard({ team1, team2, logo1, logo2, score, date, time, status }) {
  return (
    <Card style={{ width: '20rem' }} className="m-2 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-center">
            <img src={logo1} alt={team1} width={40} />
            <div>{team1}</div>
          </div>

          <div className="text-center">
            <div className="fw-bold fs-4">{score}</div>
            <small className="text-muted">{status}</small>
          </div>

          <div className="text-center">
            <img src={logo2} alt={team2} width={40} />
            <div>{team2}</div>
          </div>
        </div>

        <div className="text-center mt-2">
          <small>{date} — {time}</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MatchCard;
