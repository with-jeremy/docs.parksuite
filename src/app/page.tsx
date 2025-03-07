// pages/index.js

import Image from 'next/image';

export default function Home() {
  return (
      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Parking App Project</h1>
          <p className="text-gray-700 leading-relaxed">
            This project aims to create a user-friendly and efficient app for booking parking spaces, leveraging concepts from successful platforms like Airbnb.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Your input is crucial to the success of this project! Please review the <a href="/attributes" className="text-blue-500 font-medium hover:underline">Attribute Editing Form</a> and provide your feedback.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>User-friendly interface for hosts and renters.</li>
            <li>Detailed parking space listings with relevant attributes.</li>
            <li>Secure booking and payment system.</li>
            <li>Review and rating system to build trust.</li>
            <li>Location-based search and filtering.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Next Steps</h2>
          <p className="text-gray-700 leading-relaxed">
            1. Review the <a href="/attributes" className="text-blue-500 font-medium hover:underline">Attribute Editing Form</a> and provide your input.
          </p>
            <p className="text-gray-700 leading-relaxed">
            2. Explore the <a href="/data-definition" className="text-blue-500 font-medium hover:underline">Data Definition</a> to understand the project&apos;s data structure.
            </p>
          <p className="text-gray-700 leading-relaxed">
            3. Provide any additional feedback or suggestions you may have.
          </p>
        </section>
      </div>
  );
}