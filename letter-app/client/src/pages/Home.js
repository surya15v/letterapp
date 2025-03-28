import React from 'react';

function Home() {
  const handleLogin = () => {
    window.location.href = "http://localhost:5001/auth/google";
  };

  return (
    <div>
      <h1>Letter App</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}
export default Home;
