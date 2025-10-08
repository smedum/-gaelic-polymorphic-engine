import React from 'react';

const AboutComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Gaelic Polymorphic Engine</h2>
          <p className="text-gray-600 mb-6">
            A community-driven platform for Gaelic language preservation and enhancement.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Approach</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Start with what works</li>
                <li>• Build trust gradually</li>
                <li>• Grow organically</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Technology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React + Vite</li>
                <li>• Tailwind CSS</li>
                <li>• Modern web standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
