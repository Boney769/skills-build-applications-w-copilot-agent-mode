import { useEffect, useState } from 'react';
import apiBase, { normalizeRecords } from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${apiBase}/api/users/`)
      .then((response) => { if (!response.ok) throw new Error('Failed to load users'); return response.json(); })
      .then((data) => setUsers(normalizeRecords(data)))
      .catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <main className="card shadow-sm border-0 p-4">
      <h1 className="h3 mb-3">Users</h1>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <div className="list-group">
        {users.map((user) => (
          <div key={user._id ?? user.name} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{user.name}</strong>
                <div className="text-muted">{user.email ?? 'No email on file'}</div>
              </div>
              <span className="badge bg-primary rounded-pill">{user.level ?? 'beginner'}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
