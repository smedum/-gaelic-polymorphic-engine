import React, { useState } from 'react';
import CommunityPage from './components/Community/CommunityPage.jsx';
import AboutPage from './components/About/AboutComponent';

const NavBar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'community', label: 'Home' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className="bg-gradient-to-r from-green-700 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🧭</span>
            <div>
              <h1 className="text-2xl font-bold">Gaelic Polymorphic Engine</h1>
              <p className="text-sm opacity-90">Community-driven Gaelic technology</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === item.id 
                    ? 'bg-white text-green-700 font-semibold shadow-md' 
                    : 'hover:bg-green-600 hover:shadow-md'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const useSound = () => {
  const playSound = React.useCallback((soundType) => {
    if (typeof window === 'undefined' || !window.Audio) return;
    const soundMap = {
      phonetic: { url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3', volume: 0.3 },
      grammar: { url: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3', volume: 0.4 },
      dictionary: { url: 'https://assets.mixkit.co/sfx/preview/mixkit-page-turn-swipe-1492.mp3', volume: 0.3 },
      style: { url: 'https://assets.mixkit.co/sfx/preview/mixkit-magic-spell-493.mp3', volume: 0.5 },
      success: { url: 'https://assets.mixkit.co/sfx/preview/mixkit-completion-of-a-level-2063.mp3', volume: 0.4 },
      hover: { url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3', volume: 0.1 }
    };
    const soundConfig = soundMap[soundType] || soundMap.phonetic;
    try {
      const audio = new Audio(soundConfig.url);
      audio.volume = soundConfig.volume;
      audio.play().catch(e => console.log('Sound play failed:', e));
    } catch (error) {
      console.log('Sound error:', error);
    }
  }, []);
  return playSound;
};

function App() {
  const [activeTab, setActiveTab] = useState('community');
  const playSound = useSound();

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'community' && <CommunityPage playSound={playSound} />}
        {activeTab === 'about' && <AboutPage />}
      </main>
    </div>
  );
}

export default App;
// Force redeploy with Tailwind CSS
