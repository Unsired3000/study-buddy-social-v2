export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">🎓 Study Buddy Social</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        The AI-powered platform for rising talent and smart study. Learn, grow, and pivot with purpose.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Start Learning
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-300">
          Explore Fields
        </button>
      </div>
    </div>
  )
}
