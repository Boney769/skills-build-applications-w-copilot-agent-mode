import { useEffect, useState } from 'react';
import apiBase, { normalizeRecords } from '../api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${apiBase}/api/workouts/`)
      .then((response) => { if (!response.ok) throw new Error('Failed to load workouts'); return response.json(); })
      .then((data) => setWorkouts(normalizeRecords(data)))
      .catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <main className="card shadow-sm border-0 p-4">
      <h1 className="h3 mb-3">Workouts</h1>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <div className="row g-3">
        {workouts.map((workout) => (
          <div key={workout._id ?? workout.name} className="col-md-6">
            <div className="card h-100 border-0 bg-light">
              <div className="card-body">
                <h2 className="h5">{workout.name}</h2>
                <p className="mb-1"><strong>Focus:</strong> {workout.focus ?? 'General fitness'}</p>
                <p className="mb-1"><strong>Duration:</strong> {workout.duration ?? 30} min</p>
                <p className="mb-0"><strong>Difficulty:</strong> {workout.difficulty ?? 'moderate'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
