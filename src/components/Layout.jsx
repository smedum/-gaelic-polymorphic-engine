import React, { useState } from 'react';

const NavBar = ({ activeTab, setActiveTab }) => {
  return (
    <nav style={{ background: 'linear-gradient(to right, #15803d, #2563eb)', color: 'white', padding: '1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Gaelic Nexus</h1>
          <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>Community-driven Gaelic technology hub</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('community')} 
            style={{ 
              padding: '0.5rem 1rem', 
              borderRadius: '0.5rem', 
              background: activeTab === 'community' ? 'white' : 'transparent', 
              color: activeTab === 'community' ? '#15803d' : 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('about')} 
            style={{ 
              padding: '0.5rem 1rem', 
              borderRadius: '0.5rem', 
              background: activeTab === 'about' ? 'white' : 'transparent', 
              color: activeTab === 'about' ? '#15803d' : 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('community');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {activeTab === 'community' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1f2937' }}>Community Hub</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>Welcome to Gaelic Nexus - the central hub for Gaelic language technology and community!</p>
          </div>
        )}
        {activeTab === 'about' && (
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1f2937' }}>About Gaelic Nexus</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>We're building Gaelic Nexus as a central platform to preserve and teach the Gaelic language through modern technology and community collaboration.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
