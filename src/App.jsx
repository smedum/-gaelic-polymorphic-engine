# Navigate to your project directory
cd gaelic-polymorphic-engine

# Replace/Create the powerful App.jsx
cat > src/App.jsx << 'EOF'
import React, { useState } from 'react';

// Import all components
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';
import CommunityPage from './components/CommunityPage';
import AboutPage from './components/AboutPage';

// Navigation Component (now integrated into App.jsx)
const NavBar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'demo', label: 'Demo' },
    { id: 'community', label: 'Community & Ecosystem' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className="bg-gradient-to-r from-green-700 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🧭</span>
            <div>
              <h1 className="text-2xl font-bold">Gaelic Polymorphic Engine</h1>
              <p className="text-sm opacity-90">Four specialized pipelines for Gaelic content</p>
            </div>
          </div>
          
          {/* Navigation Items */}
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

// Enhanced Sound Hook (now integrated into App.jsx)
const useSound = () => {
  const playSound = React.useCallback((soundType) => {
    if (typeof window === 'undefined' || !window.Audio) return;

    const soundMap = {
      phonetic: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        volume: 0.3
      },
      grammar: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3', 
        volume: 0.4
      },
      dictionary: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-page-turn-swipe-1492.mp3',
        volume: 0.3
      },
      style: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-magic-spell-493.mp3',
        volume: 0.5
      },
      success: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-completion-of-a-level-2063.mp3',
        volume: 0.4
      },
      hover: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        volume: 0.1
      }
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

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const playSound = useSound();

  // Enhance navigation with sound
  const handleNavigation = (tabId) => {
    playSound('hover');
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar activeTab={activeTab} setActiveTab={handleNavigation} />
      
      {/* Main Content */}
      <main>
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'demo' && <DemoPage playSound={playSound} />}
        {activeTab === 'community' && <CommunityPage />}
        {activeTab === 'about' && <AboutPage />}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">Building the future of Gaelic technology through pragmatic mutualism</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/smedum/-gaelic-polymorphic-engine" 
               className="hover:text-green-300 transition-colors">
              GitHub
            </a>
            <button 
              onClick={() => playSound('success')}
              className="hover:text-green-300 transition-colors"
            >
              Test Sound
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
EOF# Navigate to your project directory
cd gaelic-polymorphic-engine

# Replace/Create the powerful App.jsx
cat > src/App.jsx << 'EOF'
import React, { useState } from 'react';

// Import all components
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';
import CommunityPage from './components/CommunityPage';
import AboutPage from './components/AboutPage';

// Navigation Component (now integrated into App.jsx)
const NavBar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'demo', label: 'Demo' },
    { id: 'community', label: 'Community & Ecosystem' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className="bg-gradient-to-r from-green-700 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🧭</span>
            <div>
              <h1 className="text-2xl font-bold">Gaelic Polymorphic Engine</h1>
              <p className="text-sm opacity-90">Four specialized pipelines for Gaelic content</p>
            </div>
          </div>
          
          {/* Navigation Items */}
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

// Enhanced Sound Hook (now integrated into App.jsx)
const useSound = () => {
  const playSound = React.useCallback((soundType) => {
    if (typeof window === 'undefined' || !window.Audio) return;

    const soundMap = {
      phonetic: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        volume: 0.3
      },
      grammar: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3', 
        volume: 0.4
      },
      dictionary: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-page-turn-swipe-1492.mp3',
        volume: 0.3
      },
      style: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-magic-spell-493.mp3',
        volume: 0.5
      },
      success: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-completion-of-a-level-2063.mp3',
        volume: 0.4
      },
      hover: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        volume: 0.1
      }
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

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const playSound = useSound();

  // Enhance navigation with sound
  const handleNavigation = (tabId) => {
    playSound('hover');
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar activeTab={activeTab} setActiveTab={handleNavigation} />
      
      {/* Main Content */}
      <main>
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'demo' && <DemoPage playSound={playSound} />}
        {activeTab === 'community' && <CommunityPage />}
        {activeTab === 'about' && <AboutPage />}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">Building the future of Gaelic technology through pragmatic mutualism</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/smedum/-gaelic-polymorphic-engine" 
               className="hover:text-green-300 transition-colors">
              GitHub
            </a>
            <button 
              onClick={() => playSound('success')}
              className="hover:text-green-300 transition-colors"
            >
              Test Sound
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
EOF# Navigate to your project directory
cd gaelic-polymorphic-engine

# Replace/Create the powerful App.jsx
cat > src/App.jsx << 'EOF'
import React, { useState } from 'react';

// Import all components
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';
import CommunityPage from './components/CommunityPage';
import AboutPage from './components/AboutPage';

// Navigation Component (now integrated into App.jsx)
const NavBar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'demo', label: 'Demo' },
    { id: 'community', label: 'Community & Ecosystem' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className="bg-gradient-to-r from-green-700 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🧭</span>
            <div>
              <h1 className="text-2xl font-bold">Gaelic Polymorphic Engine</h1>
              <p className="text-sm opacity-90">Four specialized pipelines for Gaelic content</p>
            </div>
          </div>
          
          {/* Navigation Items */}
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

// Enhanced Sound Hook (now integrated into App.jsx)
const useSound = () => {
  const playSound = React.useCallback((soundType) => {
    if (typeof window === 'undefined' || !window.Audio) return;

    const soundMap = {
      phonetic: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        volume: 0.3
      },
      grammar: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3', 
        volume: 0.4
      },
      dictionary: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-page-turn-swipe-1492.mp3',
        volume: 0.3
      },
      style: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-magic-spell-493.mp3',
        volume: 0.5
      },
      success: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-completion-of-a-level-2063.mp3',
        volume: 0.4
      },
      hover: {
        url: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        volume: 0.1
      }
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

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const playSound = useSound();

  // Enhance navigation with sound
  const handleNavigation = (tabId) => {
    playSound('hover');
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar activeTab={activeTab} setActiveTab={handleNavigation} />
      
      {/* Main Content */}
      <main>
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'demo' && <DemoPage playSound={playSound} />}
        {activeTab === 'community' && <CommunityPage />}
        {activeTab === 'about' && <AboutPage />}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">Building the future of Gaelic technology through pragmatic mutualism</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/smedum/-gaelic-polymorphic-engine" 
               className="hover:text-green-300 transition-colors">
              GitHub
            </a>
            <button 
              onClick={() => playSound('success')}
              className="hover:text-green-300 transition-colors"
            >
              Test Sound
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
EOF
