import React from 'react';

function Home() {
  const appName = import.meta.env.VITE_APP_NAME || 'SPA Routing Demo';
  const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';
  const envMode = import.meta.env.MODE;

  return (
    <div className="page">
      <h1>Welcome to {appName}</h1>
      <p>This is a Single Page Application demonstrating routing, forms, and protected routes.</p>
      <p>Navigate using the menu above to explore products and contact us.</p>

      <div className="env-info">
        <p><strong>Environment:</strong> {envMode}</p>
        <p><strong>API Base:</strong> {apiBase}</p>
      </div>
    </div>
  );
}

export default Home;