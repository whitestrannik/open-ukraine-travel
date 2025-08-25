import React from 'react'

export default function TestEnglish() {
  React.useEffect(() => {
    document.title = "TEST ENGLISH - " + Date.now();
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          ENGLISH VERSION WORKS!
        </h1>
        <p className="text-xl text-blue-600">
          This is the English version of Chernihiv page
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Timestamp: {Date.now()}
        </p>
      </div>
    </div>
  )
}

