import { useEffect, useState } from 'react';
import apiBase, { normalizeRecords } from '../api';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${apiBase}/api/leaderboard/`)
      .then((response) => { if (!response.ok) throw new Error('Failed to load leaderboard'); return response.json(); })
      .then((data) => setEntries(normalizeRecords(data)))
      .catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <main className="card shadow-sm border-0 p-4">
      <h1 className="h3 mb-3">Leaderboard</h1>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <ol className="list-group list-group-numbered">
        {entries.map((entry) => (
          <li key={entry._id ?? `${entry.name}-${entry.userId}`} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-semibold">{entry.name}</div>
              <small className="text-muted">User: {entry.userId ?? 'Unknown'}</small>
            </div>
            <span className="badge bg-success rounded-pill">{entry.score ?? 0}</span>
          </li>
        ))}
      </ol>
    </main>
  );
}
