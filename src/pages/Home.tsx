import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to Royalty Technologies Headphones
        </h1>
        <button>
            <Link to="/gallery">click me</Link>
        </button>
    </div>
  )
}
