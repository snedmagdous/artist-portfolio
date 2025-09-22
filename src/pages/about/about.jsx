// src/pages/About/About.jsx
import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p>Your detailed about content goes here...</p>
      <Link to="/" className="mt-4 inline-block underline">
        ← Back to home
      </Link>
    </main>
  )
}

export default AboutPage