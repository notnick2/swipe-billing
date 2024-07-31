import React from 'react';

function MainContent() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Creating invoices lightning fast.</h1>
      <p className="mb-4">Get a detailed summary of all your sales transactions.</p>
      <ul className="list-disc list-inside mb-4">
        <li>Create invoices in 10 seconds & share them with customers</li>
        <li>Discover templates that's perfect for your business</li>
        <li>Keep track of your day-to-day transactions</li>
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        + Create your first invoice
      </button>
      <div className="mt-4">
        <a href="#" className="text-blue-500">Talk to a specialist</a>
      </div>
      <div className="mt-2">
        <a href="#" className="text-blue-500">Watch a quick video here</a>
      </div>
    </div>
  );
}

export default MainContent;