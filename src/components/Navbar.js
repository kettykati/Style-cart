import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="logo">🛍️ StyleCart</div>
      <div className="search-bar">
        <input placeholder="Search products, brands..." />
        <button>Search</button>
      </div>
      <div className="icons">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  );
}
