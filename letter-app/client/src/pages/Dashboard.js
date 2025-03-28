import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      navigate('/');
    }
  }, [navigate]);

  return <h1>Welcome to Dashboard</h1>;
}
export default Dashboard;


