import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <div>
        <h1>
            Gallery page for headphones
        </h1>
        <form>
            <label>Name</label>
            <input type='text'></input>
            <label>Name</label>
            <input type='text'></input>
            <button>
            <Link to="/checkout">Submit</Link>
        </button>
        </form>
    </div>
  )
}
