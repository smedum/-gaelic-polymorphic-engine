import React from 'react';
function App() {
  const [activeTab, setActiveTab] = React.useState('home');
  const [demoType, setDemoType] = React.useState('pronunciation');
  const [processing, setProcessing] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const [inputData, setInputData] = React.useState({
    word: '',
    phonetics: '',
    poem: ''
  });

  // Simulated processing function (replace with actual API call)
  const processContent = async () => {
    setProcessing(true);
    setResult(null);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (demoType === 'pronunciation') {
      setResult({
        success: true,
        format: 'emoji_visualization',
        data: {
          original: inputData.word || 'Sláinte',
          phonetics: inputData.phonetics || '/ˈsˠl̪ˠaːn̪ˠtʲə/',
          emoji_sequence: '🌊💫✨🎵',
          breakdown: [
            { sound: 'sl', emoji: '🌊', description: 'Flowing liquid sound' },
            { sound: 'aː', emoji: '💫', description: 'Long bright vowel' },
            { sound: 'n', emoji: '✨', description: 'Nasal resonance' },
            { sound: 'tʲə', emoji: '🎵', description: 'Soft ending' }
          ]
        }
      });
    } else if (demoType === 'poetry') {
      setResult({
        success: true,
        format: 'multi_modal_poetry',
        data: {
          original: inputData.poem || 'Is fada an lá go samhradh',
          translation: 'Long is the day until summer',
          structure: {
            meter: 'Traditional Gaelic meter',
            rhyme_scheme: 'AABB',
            syllable_count: [7, 6]
          },
          cultural_context: 'Expression of longing and anticipation',
          emotional_mapping: {
            primary: 'Hope',
            secondary: 'Patience',
            intensity: 0.7
          },
          preservation_formats: ['Text', 'Audio IPA', 'Emoji Sequence', 'Cultural Notes']
        }
      });
    }
    
    setProcessing(false);
  };

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-green-700 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🧭</span>
            <h1 className="text-2xl font-bold">Gaelic Polymorphic Engine</h1>
          </div>
          <div className="flex space-x-6">
            {['home', 'demo', 'api', 'about'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-green-700 font-semibold' 
                    : 'hover:bg-green-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-blue-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Preserving Gaelic Through Adaptive AI</h2>
          <p className="text-xl mb-8 opacity-90">
            A polymorphic content processing engine that transforms endangered language preservation
          </p>
          <button
            onClick={() => setActiveTab('demo')}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all shadow-lg"
          >
            Try the Demo →
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎯',
              title: 'Pronunciation Mapping',
              description: 'Transform complex Gaelic phonetics into intuitive emoji sequences for easier learning',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: '📜',
              title: 'Poetry Analysis',
              description: 'Multi-format cultural preservation with structural, emotional, and contextual analysis',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: '🎵',
              title: 'Audio Processing',
              description: 'Linguistic analysis of spoken Gaelic with transcription and pronunciation guidance',
              color: 'from-purple-500 to-purple-600'
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className={`text-5xl mb-4 bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Polymorphic Pattern Visualization */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">The Polymorphic Pattern</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {['Input Detection', 'Specialized Processing', 'Unified Output'].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6 flex-1 text-center shadow-md">
                  <div className="text-3xl font-bold text-green-700 mb-2">{idx + 1}</div>
                  <div className="font-semibold text-gray-800">{step}</div>
                </div>
                {idx < 2 && <div className="text-3xl text-gray-400">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DemoPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Interactive Demo</h2>
        
        {/* Content Type Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Choose Content Type:</h3>
          <div className="flex space-x-4">
            {[
              { id: 'pronunciation', label: '🎯 Pronunciation → Emoji', icon: '🎯' },
              { id: 'poetry', label: '📜 Poetry Analysis', icon: '📜' },
              { id: 'audio', label: '🎵 Audio Processing', icon: '🎵' }
            ].map(type => (
              <button
                key={type.id}
                onClick={() => {
                  setDemoType(type.id);
                  setResult(null);
                }}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
                  demoType === type.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-2xl mb-1">{type.icon}</div>
                <div className="text-sm">{type.label.split(' ').slice(1).join(' ')}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {demoType === 'pronunciation' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">Gaelic Pronunciation Mapping</h3>
              <input
                type="text"
                placeholder="Enter Gaelic word (e.g., Sláinte)"
                value={inputData.word}
                onChange={(e) => setInputData({...inputData, word: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phonetics (optional, e.g., /ˈsˠl̪ˠaːn̪ˠtʲə/)"
                value={inputData.phonetics}
                onChange={(e) => setInputData({...inputData, phonetics: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
              />
            </div>
          )}

          {demoType === 'poetry' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">Gaelic Poetry Analysis</h3>
              <textarea
                placeholder="Enter Gaelic poem or phrase..."
                value={inputData.poem}
                onChange={(e) => setInputData({...inputData, poem: e.target.value})}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
              />
            </div>
          )}

          {demoType === 'audio' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">Audio Processing</h3>
              <div className="border-4 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <div className="text-5xl mb-4">🎤</div>
                <p className="text-gray-600">Audio upload feature coming soon</p>
                <p className="text-sm text-gray-500 mt-2">Will support MP3, WAV, and OGG formats</p>
              </div>
            </div>
          )}

          <button
            onClick={processContent}
            disabled={processing || demoType === 'audio'}
            className={`w-full mt-6 py-4 rounded-lg font-semibold text-lg transition-all ${
              processing || demoType === 'audio'
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
            }`}
          >
            {processing ? '⏳ Processing...' : '🚀 Process Content'}
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Processing Result</h3>
            
            {result.format === 'emoji_visualization' && (
              <div className="space-y-6">
                <div className="text-center py-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                  <div className="text-6xl mb-4">{result.data.emoji_sequence}</div>
                  <p className="text-2xl font-semibold text-gray-800">{result.data.original}</p>
                  <p className="text-gray-600 mt-2">{result.data.phonetics}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-700">Sound Breakdown:</h4>
                  {result.data.breakdown.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-4xl">{item.emoji}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">/{item.sound}/</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result.format === 'multi_modal_poetry' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <p className="text-xl font-semibold text-gray-800 mb-2">{result.data.original}</p>
                  <p className="text-gray-600 italic">{result.data.translation}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3">Structure</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Meter:</strong> {result.data.structure.meter}</p>
                      <p><strong>Rhyme:</strong> {result.data.structure.rhyme_scheme}</p>
                      <p><strong>Syllables:</strong> {result.data.structure.syllable_count.join(', ')}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3">Emotional Mapping</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Primary:</strong> {result.data.emotional_mapping.primary}</p>
                      <p><strong>Secondary:</strong> {result.data.emotional_mapping.secondary}</p>
                      <div className="mt-3">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                            style={{width: `${result.data.emotional_mapping.intensity * 100}%`}}
                          />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Intensity: {(result.data.emotional_mapping.intensity * 100).toFixed(0)}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Cultural Context</h4>
                  <p className="text-gray-700">{result.data.cultural_context}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {result.data.preservation_formats.map((format, idx) => (
                    <span key={idx} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const APIPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">API Documentation</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Base URL</h3>
          <code className="block bg-gray-900 text-green-400 p-4 rounded-lg">
            https://api.gaelic-engine.com/v1
          </code>
        </div>

        {/* Endpoints */}
        {[
          {
            method: 'POST',
            endpoint: '/process',
            description: 'Process single content item',
            request: {
              content_type: 'pronunciation',
              input_data: {
                word: 'Sláinte',
                phonetics: '/ˈsˠl̪ˠaːn̪ˠtʲə/',
                dialect: 'standard'
              }
            },
            response: {
              success: true,
              preservation_format: 'emoji_visualization',
              processed_data: { emoji_sequence: '🌊💫✨🎵' }
            }
          },
          {
            method: 'POST',
            endpoint: '/process-batch',
            description: 'Process multiple items in batch',
            request: {
              items: [
                { content_type: 'pronunciation', input_data: {} },
                { content_type: 'poetry', input_data: {} }
              ]
            },
            response: {
              results: [
                { success: true, content_type: 'pronunciation' }
              ]
            }
          },
          {
            method: 'GET',
            endpoint: '/processors',
            description: 'List available processors',
            response: {
              processors: [
                { name: 'GaelicPronunciationProcessor', preservation_format: 'emoji_visualization' }
              ]
            }
          }
        ].map((api, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-4 py-2 rounded-lg font-bold ${
                api.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {api.method}
              </span>
              <code className="text-lg font-mono text-gray-800">{api.endpoint}</code>
            </div>
            <p className="text-gray-600 mb-4">{api.description}</p>
            
            {api.request && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Request:</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(api.request, null, 2)}
                </pre>
              </div>
            )}
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Response:</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {JSON.stringify(api.response, null, 2)}
              </pre>
            </div>
          </div>
        ))}

        {/* Authentication */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">🔐 Authentication</h3>
          <p className="text-yellow-700">
            Include your API key in the Authorization header:
          </p>
          <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mt-3">
            Authorization: Bearer YOUR_API_KEY
          </code>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About the Polymorphic Pattern</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">What is Polymorphism?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The polymorphic pattern allows a single interface to process different types of content with specialized logic. 
            Like how water adapts to any container, our engine adapts its processing strategy based on the input type.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <p className="font-mono text-sm text-gray-800">
              Input → [Detect Type] → [Specialized Processing] → [Unified Output]
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Core Principles</h3>
          <div className="space-y-4">
            {[
              { title: 'Type Detection First', desc: 'Always identify content type before processing' },
              { title: 'Specialized Processing', desc: 'Each content type gets optimal handling' },
              { title: 'Graceful Degradation', desc: 'Multiple fallback strategies ensure reliability' },
              { title: 'Unified Output', desc: 'Consistent interface despite different processing paths' },
              { title: 'Extensible Architecture', desc: 'Easy to add new content types and processors' }
            ].map((principle, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{idx + 1}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Gaelic Preservation?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gaelic languages face endangerment, with fewer native speakers each generation. Traditional preservation 
            methods struggle with the complexity of pronunciation, cultural context, and emotional nuance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our polymorphic engine addresses this by adapting its approach based on content type—whether it's 
            pronunciation mapping, poetry analysis, or audio transcription—ensuring each aspect of the language 
            is preserved in the most effective format.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {activeTab === 'home' && <HomePage />}
      {activeTab === 'demo' && <DemoPage />}
      {activeTab === 'api' && <APIPage />}
      {activeTab === 'about' && <AboutPage />}
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">🧭 Gaelic Polymorphic Preservation Engine</p>
          <p className="text-sm text-gray-400">Transforming language preservation through adaptive AI</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">Documentation</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
