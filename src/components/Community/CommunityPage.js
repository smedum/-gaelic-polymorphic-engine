# Copy this exact content to completely replace the file
cat > src/components/Community/CommunityPage.js << 'EOL'
import React, { useState } from 'react';

const CommunityPage = ({ playSound }) => {
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activePipeline, setActivePipeline] = useState(null);
  const [outputs, setOutputs] = useState({ phonetic: '', grammar: '', dictionary: '', style: '' });

  const processText = async (text) => {
    if (!text.trim()) return;
    
    setIsProcessing(true);
    playSound('success');
    setOutputs({ phonetic: '', grammar: '', dictionary: '', style: '' });

    const pipelines = [
      { name: 'phonetic', delay: 800, icon: '🔊' },
      { name: 'grammar', delay: 1200, icon: '📝' },
      { name: 'dictionary', delay: 1600, icon: '📚' },
      { name: 'style', delay: 2000, icon: '🎨' }
    ];

    for (const pipeline of pipelines) {
      setActivePipeline(pipeline.name);
      await new Promise(resolve => setTimeout(resolve, pipeline.delay));
      playSound(pipeline.name);
      
      setOutputs(prev => ({
        ...prev,
        [pipeline.name]: `${pipeline.icon} ${pipeline.name.charAt(0).toUpperCase() + pipeline.name.slice(1)} Analysis:\nProcessed: "${text}"`
      }));
    }

    playSound('success');
    setActivePipeline(null);
    setIsProcessing(false);
  };

  const PipelineBox = ({ title, output, pipelineType, icon, description }) => (
    <div 
      className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl"
      onMouseEnter={() => playSound('hover')}
    >
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
          activePipeline === pipelineType ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-gray-200'
        }`}>
          <span className="text-white text-lg">{icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="min-h-24 p-3 rounded-lg border border-gray-200 bg-gray-50">
        {output ? (
          <pre className="text-gray-700 whitespace-pre-wrap text-sm">{output}</pre>
        ) : (
          <p className="text-gray-400 text-center py-4">
            {activePipeline === pipelineType ? '🔄 Processing...' : 'Enter text to analyze'}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Gaelic Polymorphic Engine</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Building Gaelic technology through pragmatic mutualism
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Philosophy: Pragmatic Mutualism</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">🤝 Mutual Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Content creators receive recognition</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Learners access authentic materials</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Ecosystem grows through contributions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">🎯 Pragmatic Approach</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Start with what works now</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Build trust through small promises</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Let real usage guide development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Process Gaelic Text</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Gaelic Text</label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type Gaelic text here..."
                  className="w-full h-24 p-4 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 resize-none transition-all"
                  onFocus={() => playSound('hover')}
                />
              </div>
              <button
                onClick={() => processText(inputText)}
                disabled={!inputText.trim() || isProcessing}
                className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                  !inputText.trim() || isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 hover:shadow-lg'
                }`}
              >
                {isProcessing ? '🔄 Processing...' : 'Process Text'}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PipelineBox
              title="Phonetic Analysis"
              description="Sound patterns and pronunciation"
              output={outputs.phonetic}
              pipelineType="phonetic"
              icon="🔊"
            />
            <PipelineBox
              title="Grammar Structure"
              description="Syntax and sentence analysis"
              output={outputs.grammar}
              pipelineType="grammar"
              icon="📝"
            />
            <PipelineBox
              title="Dictionary Lookup"
              description="Word meanings and context"
              output={outputs.dictionary}
              pipelineType="dictionary"
              icon="📚"
            />
            <PipelineBox
              title="Stylistic Enhancement"
              description="Poetic and cultural adaptation"
              output={outputs.style}
              pipelineType="style"
              icon="🎨"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
EOL
