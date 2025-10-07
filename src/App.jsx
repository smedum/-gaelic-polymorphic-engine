{/* Pipeline Selector */}
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
        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
          demoType === pipeline.id
            ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <div className="text-lg">{pipeline.label}</div>
        <div className="text-xs opacity-75">{pipeline.description}</div>
      </button>
    ))}
  </div>
</div>
