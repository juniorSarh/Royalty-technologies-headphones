import React from 'react'
import { BrowserRouter, Link, Outlet, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="home">Home</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="checkout">Checkout</Link>
      </nav>
      <Outlet/>
      <footer>
        <p>This is my footer </p>
      </footer>
    </div>
  )
}
