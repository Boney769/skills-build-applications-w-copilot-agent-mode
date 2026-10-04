import { useEffect, useState } from 'react';
import apiBase, { normalizeRecords } from '../api';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${apiBase}/api/teams/`)
      .then((response) => { if (!response.ok) throw new Error('Failed to load teams'); return response.json(); })
      .then((data) => setTeams(normalizeRecords(data)))
      .catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <main className="card shadow-sm border-0 p-4">
      <h1 className="h3 mb-3">Teams</h1>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <div className="row g-3">
        {teams.map((team) => (
          <div key={team._id ?? team.name} className="col-md-6">
            <div className="card h-100 border-0 bg-light">
              <div className="card-body">
                <h2 className="h5">{team.name}</h2>
                <p className="text-muted">{team.description ?? 'No team description available.'}</p>
                <div>
                  {team.members?.map((member) => (
                    <span key={`${team.name}-${member}`} className="badge bg-secondary me-2 mb-2">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
