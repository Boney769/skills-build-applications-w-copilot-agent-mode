import { useEffect, useState } from 'react';
import apiBase, { normalizeRecords } from '../api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${apiBase}/api/activities/`)
      .then((response) => { if (!response.ok) throw new Error('Failed to load activities'); return response.json(); })
      .then((data) => setActivities(normalizeRecords(data)))
      .catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <main className="card shadow-sm border-0 p-4">
      <h1 className="h3 mb-3">Activities</h1>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id ?? `${activity.type}-${activity.userId}`}>
                <td>{activity.type}</td>
                <td>{activity.duration} min</td>
                <td>{activity.calories ?? 0}</td>
                <td>{activity.userId ?? 'Unknown'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
