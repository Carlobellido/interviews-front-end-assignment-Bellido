import { useState } from "react";
import React from 'react'
import './NavBar.css'




export default function NavBar() {
    const [query, setQuery] = useState("");

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍖</span>
          <h1>Recipe Books</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search Recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="textMarquee">
          <marquee behavior="" direction="">
         <i><strong>Where you can find the best recipes for your meals!</strong></i></marquee>
        </p>
      </nav>
      </>
    
  )
}




