import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getProtected } from '../../api/auth';

export default function Protected() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return navigate('/login');

    getProtected(token)
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem('accessToken');
        navigate('/login');
      });
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      {user ? <p>Welcome, user ID: {user.id}</p> : <p>Loading...</p>}
    </div>
  );
}
