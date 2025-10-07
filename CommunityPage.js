# Create the Community hub
cat > src/components/CommunityPage.js << 'EOF'
import React from 'react';

const CommunityPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
    <div className="max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Community & Ecosystem</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building Gaelic technology through pragmatic mutualism - where every participant benefits and every contribution strengthens our cultural future.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Philosophy: Pragmatic Mutualism</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">🤝 Mutual Benefits</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Content creators receive recognition and community status
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Learners access authentic cultural materials
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                The ecosystem grows through shared contributions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Gaelic culture becomes more visible and accessible
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">🎯 Pragmatic Approach</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Start with what works now, improve iteratively
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Build trust through small, kept promises
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Focus on immediate, tangible benefits
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Let real usage guide development
              </li>
            </ul>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-lg mb-3 text-gray-800">Community Guidelines</h4>
          <p className="text-gray-700">
            We believe in respectful collaboration, cultural sensitivity, and mutual benefit. 
            Every tool we build should serve both individual creators and the broader Gaelic community.
          </p>
        </div>
      </div>

      {/* Ecosystem Apps Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Growing Ecosystem</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Current App - Polymorphic Engine */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
              🧭
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Gaelic Polymorphic Engine</h3>
            <p className="text-gray-600 mb-4">Process Gaelic content through specialized pipelines for different learning and cultural needs.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Live</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Core App</span>
            </div>
            <a 
              href="/demo" 
              className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Try It Now
            </a>
          </div>

          {/* Future App Placeholders */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
              🌳
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Tree Council Stories</h3>
            <p className="text-gray-600 mb-4">Interactive Gaelic storytelling with the wise tree council characters.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">In Development</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Education</span>
            </div>
            <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
              🎵
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Gaelic Song Weaver</h3>
            <p className="text-gray-600 mb-4">Create and analyze traditional Gaelic songs with AI-assisted composition tools.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Planned</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">Music</span>
            </div>
            <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
              Coming 2024
            </button>
          </div>

          {/* Empty slots for future apps */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300 text-center">
            <div className="text-4xl mb-4 text-gray-400">+</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-500">Your App Idea Here</h3>
            <p className="text-gray-500 text-sm mb-4">Got an idea for the Gaelic ecosystem?</p>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-all">
              Suggest an App
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300 text-center">
            <div className="text-4xl mb-4 text-gray-400">+</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-500">Community Project</h3>
            <p className="text-gray-500 text-sm mb-4">Built by and for the Gaelic community</p>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-all">
              Submit Project
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300 text-center">
            <div className="text-4xl mb-4 text-gray-400">+</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-500">Partner Integration</h3>
            <p className="text-gray-500 text-sm mb-4">Connecting with other Gaelic initiatives</p>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Community Links & Resources */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Community Resources</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Get Involved</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-semibold text-gray-800">Community Forum</div>
                  <div className="text-sm text-gray-600">Discuss, suggest features, share ideas</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <span className="text-2xl">🐙</span>
                <div>
                  <div className="font-semibold text-gray-800">GitHub Organization</div>
                  <div className="text-sm text-gray-600">Contribute code, report issues</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <span className="text-2xl">📝</span>
                <div>
                  <div className="font-semibold text-gray-800">Content Guidelines</div>
                  <div className="text-sm text-gray-600">How to contribute cultural materials</div>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Development</h3>
            <div className="space-y-3">
              <a href="https://github.com/smedum/-gaelic-polymorphic-engine" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <span className="text-2xl">🔧</span>
                <div>
                  <div className="font-semibold text-gray-800">Polymorphic Engine Code</div>
                  <div className="text-sm text-gray-600">Open source on GitHub</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <span className="text-2xl">📚</span>
                <div>
                  <div className="font-semibold text-gray-800">API Documentation</div>
                  <div className="text-sm text-gray-600">Build on our platform</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <span className="text-2xl">🎨</span>
                <div>
                  <div className="font-semibold text-gray-800">Design System</div>
                  <div className="text-sm text-gray-600">UI components and patterns</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CommunityPage;
