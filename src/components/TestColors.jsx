import React from 'react'

const TestColors = () => {
  return (
    <div className="p-6 m-4 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Color Test</h2>
      <div className="space-y-2">
        <div className="p-2 bg-red-500 text-white">Red 500</div>
        <div className="p-2 bg-blue-500 text-white">Blue 500</div>
        <div className="p-2 bg-green-500 text-white">Green 500</div>
        <div className="p-2 bg-purple-500 text-white">Purple 500</div>
        <div className="p-2 bg-yellow-500 text-black">Yellow 500</div>
        <div className="p-2 bg-indigo-500 text-white">Indigo 500</div>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 mr-2">
          Purple Button
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Blue Button
        </button>
      </div>
    </div>
  )
}

export default TestColors