import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <div className='gallry'>
        <h1>
            Gallery page for headphones
        </h1>
        <form>
            <label>Name</label><br></br>
            <input type='text'></input><br></br>
            <label>LastName</label><br></br>
            <input type='text'></input><br></br>
            <button>
            <Link to="/checkout">Submit</Link>
        </button>
        </form>
    </div>
  )
}
