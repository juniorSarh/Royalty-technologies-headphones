import React from 'react'
import { BrowserRouter, Link, Outlet, Routes, Route } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="">Home</Link>
        <Link to="">Gallery</Link>
        <Link to="">Checkout</Link>
      </nav>
      <Outlet/>
      <footer>
        <p>This is my footer </p>
      </footer>
    </div>
  )
}
