import React from 'react';

function App() {
  const [activeTab, setActiveTab] = React.useState('home');
  const [selectedPipeline, setSelectedPipeline] = React.useState('elder');
  const [processing, setProcessing] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const [inputText, setInputText] = React.useState('');

  // Simulated processing function
  const processContent = async () => {
    setProcessing(true);
    setResult(null);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Different processing based on selected pipeline
    const pipelineResults = {
      elder: {
        success: true,
        pipeline: 'Elder Wisdom',
        data: {
          original: inputText || 'Is fada an lá go samhradh',
          cultural_context: 'Traditional Gaelic proverb about patience and anticipation of summer',
          historical_notes: 'This saying reflects the agricultural cycles of Gaelic Scotland',
          traditional_wisdom: 'Patience in hardship leads to eventual reward',
          related_proverbs: ['Is minic a bhris béal duine a shrón', 'Nuair a thig an cat, téann an luch faoi thalamh']
        }
      },
      learner: {
        success: true,
        pipeline: 'Learner Support',
        data: {
          original: inputText || 'Ciamar a tha thu?',
          pronunciation: '/ˈkʰʲɪmər ə ha uː/',
          translation: 'How are you?',
          breakdown: [
            { part: 'Ciamar', meaning: 'How', pronunciation: '/ˈkʰʲɪmər/' },
            { part: 'a tha', meaning: 'are', pronunciation: '/ə ha/' },
            { part: 'thu', meaning: 'you', pronunciation: '/uː/' }
          ],
          learning_tips: [
            'The "ch" sound is a velar fricative - like clearing your throat gently',
            'Practice the rising intonation at the end for questions'
          ]
        }
      },
      song: {
        success: true,
        pipeline: 'Song Analysis',
        data: {
          original: inputText || 'Gura mis tha fo éislein, Moch sa mhadainn là bròin',
          translation: 'I am under sorrow, Early in a morning of sadness',
          structure: {
            meter: 'Traditional Gaelic lyrical meter',
            rhyme_scheme: 'AABB',
            theme: 'Loss and mourning'
          },
          musical_elements: {
            typical_scale: 'Pentatonic',
            rhythm_pattern: 'Slow, lamenting 6/8 time',
            cultural_significance: 'Traditional mourning song'
          }
        }
      },
      storytelling: {
        success: true,
        pipeline: 'Storytelling',
        data: {
          original: inputText || 'Bha uair a bha gruagach beag a fuair seann taigh air bruaich locha',
          translation: 'Once there was a little maiden who found an old house on the edge of a loch',
          narrative_elements: {
            protagonist: 'Young maiden (gruagach beag)',
            setting: 'Lochside, mysterious old house',
            conflict: 'Discovery and potential danger',
            theme: 'Adventure and the unknown'
          },
          character_analysis: {
            traits: ['Curious', 'Brave', 'Resourceful'],
            archetype: 'The Seeker',
            development: 'From innocence to experience'
          }
        }
      }
    };
    
    setResult(pipelineResults[selectedPipeline]);
    setProcessing(false);
  };

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-green-700 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🧭</span>
            <div>
              <h1 className="text-2xl font-bold">Gaelic Polymorphic Engine</h1>
              <p className="text-sm opacity-90">Four specialized pipelines for Gaelic content</p>
            </div>
          </div>
          <div className="flex space-x-6">
            {['home', 'demo', 'about'].map(tab => (
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
          <h2 className="text-5xl font-bold mb-6">Four Ways to Process Gaelic Content</h2>
          <p className="text-xl mb-8 opacity-90">
            The same Gaelic input transforms through specialized pipelines: 
            Elder wisdom, Learner guidance, Song analysis, and Storytelling insights
          </p>
          <button
            onClick={() => setActiveTab('demo')}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all shadow-lg"
          >
            Try the Engine →
          </button>
        </div>
      </div>

      {/* Pipeline Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">The Four Pipelines</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '👴',
              title: 'Elder Pipeline',
              description: 'Cultural context, historical notes, and traditional Gaelic wisdom',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: '📚',
              title: 'Learner Pipeline',
              description: 'Pronunciation guides, simplified explanations, and learning support',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: '🎵',
              title: 'Song Pipeline',
              description: 'Musical patterns, lyrical structure, and cultural significance',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: '📖',
              title: 'Storytelling Pipeline',
              description: 'Narrative structures, character development, and moral lessons',
              color: 'from-orange-500 to-orange-600'
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

      {/* How It Works */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">How the Polymorphic Engine Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {[
              {step: '1', title: 'Input Gaelic Content', desc: 'Enter any Gaelic text, song, or story'},
              {step: '2', title: 'Select Pipeline', desc: 'Choose how you want it processed'},
              {step: '3', title: 'Get Specialized Output', desc: 'Receive pipeline-specific insights'}
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6 flex-1 text-center shadow-md">
                  <div className="text-3xl font-bold text-green-700 mb-2">{step.step}</div>
                  <div className="font-semibold text-gray-800 mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
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
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Gaelic Polymorphic Engine</h2>
        <p className="text-center text-gray-600 mb-8">
          Enter Gaelic content and choose a pipeline to see specialized processing
        </p>
        
        {/* Pipeline Selector - CORRECTED */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Choose Processing Pipeline:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'elder', label: '👴 Elder', description: 'Cultural Wisdom' },
              { id: 'learner', label: '📚 Learner', description: 'Learning Support' },
              { id: 'song', label: '🎵 Song', description: 'Musical Analysis' },
              { id: 'storytelling', label: '📖 Storytelling', description: 'Narrative Insights' }
            ].map(pipeline => (
              <button
                key={pipeline.id}
                onClick={() => {
                  setSelectedPipeline(pipeline.id);
                  setResult(null);
                }}
                className={`py-4 px-2 rounded-lg font-semibold transition-all ${
                  selectedPipeline === pipeline.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-2xl mb-1">{pipeline.label.split(' ')[0]}</div>
                <div className="text-lg font-semibold">{pipeline.label.split(' ')[1]}</div>
                <div className="text-xs opacity-75 mt-1">{pipeline.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Enter Gaelic Content for {selectedPipeline.charAt(0).toUpperCase() + selectedPipeline.slice(1)} Pipeline:
          </h3>
          
          <textarea
            placeholder={
              selectedPipeline === 'elder' ? "Enter Gaelic proverbs, traditional sayings, or cultural content..." :
              selectedPipeline === 'learner' ? "Enter Gaelic words, phrases, or sentences for learning..." :
              selectedPipeline === 'song' ? "Enter Gaelic song lyrics or musical content..." :
              "Enter Gaelic stories, folktales, or narrative content..."
            }
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="4"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
          />

          <button
            onClick={processContent}
            disabled={processing || !inputText.trim()}
            className={`w-full mt-6 py-4 rounded-lg font-semibold text-lg transition-all ${
              processing || !inputText.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
            }`}
          >
            {processing ? '⏳ Processing...' : `🚀 Process with ${selectedPipeline.charAt(0).toUpperCase() + selectedPipeline.slice(1)} Pipeline`}
          </button>
        </div>

        {/* Results Section */}
        {!result && !processing && (
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🧭</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Ready to Process Gaelic Content</h3>
            <p className="text-gray-600 mb-4">
              Select a pipeline and enter Gaelic text to see specialized analysis
            </p>
          </div>
        )}

        {result && (
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Processing Result</h3>
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {result.pipeline}
              </span>
            </div>
            
            {/* Simple Result Display */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <p className="text-xl font-semibold text-gray-800 mb-2">{result.data.original}</p>
                {result.data.translation && (
                  <p className="text-gray-600 italic">{result.data.translation}</p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(result.data).map(([key, value]) => {
                  if (key === 'original' || key === 'translation') return null;
                  if (typeof value === 'object') {
                    return (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-700 mb-2 capitalize">
                          {key.replace('_', ' ')}
                        </h4>
                        <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                          {JSON.stringify(value, null, 2)}
                        </pre>
                      </div>
                    );
                  }
                  return (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-1 capitalize">
                        {key.replace('_', ' ')}
                      </h4>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About the Gaelic Polymorphic Engine</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Makes This Polymorphic?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Traditional language tools process everything the same way. Our polymorphic engine recognizes that 
            different types of Gaelic content need different kinds of analysis and presentation.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <p className="font-mono text-sm text-gray-800 text-center">
              Same Gaelic Input → Different Processing Pipelines → Specialized Outputs
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Four Processing Pipelines</h3>
          <div className="space-y-6">
            {[
              {
                pipeline: 'Elder Pipeline',
                purpose: 'Preserves cultural context and traditional wisdom',
                processing: 'Historical analysis, cultural significance, traditional knowledge'
              },
              {
                pipeline: 'Learner Pipeline', 
                purpose: 'Supports language acquisition and understanding',
                processing: 'Pronunciation guides, grammatical breakdown, learning strategies'
              },
              {
                pipeline: 'Song Pipeline',
                purpose: 'Analyzes musical and lyrical elements',
                processing: 'Musical structure, rhythm patterns, cultural role of songs'
              },
              {
                pipeline: 'Storytelling Pipeline',
                purpose: 'Explores narrative and character elements',
                processing: 'Story structure, character development, thematic analysis'
              }
            ].map((pipe, idx) => (
              <div key={idx} className="border-l-4 border-green-500 pl-6 py-2">
                <h4 className="font-semibold text-lg text-gray-800 mb-1">{pipe.pipeline}</h4>
                <p className="text-gray-700 mb-2">{pipe.purpose}</p>
                <p className="text-sm text-gray-600"><strong>Processing:</strong> {pipe.processing}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {activeTab === 'home' && <HomePage />}
      {activeTab === 'demo' && <DemoPage />}
      {activeTab === 'about' && <AboutPage />}
      
      {/* Footer - COMPLETE AND CORRECT */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">🧭 Gaelic Polymorphic Engine - Four Ways to Experience Gaelic</p>
          <p className="text-sm text-gray-400">Elder Wisdom • Learning Support • Song Analysis • Storytelling Insights</p>
          <div className="mt-4 space-x-4">
            <a href="https://github.com/smedum/-gaelic-polymorphic-engine" className="text-blue-400 hover:text-blue-300">GitHub</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">Documentation</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
