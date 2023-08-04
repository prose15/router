import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({search,setSearch}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" href="/">
            About
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Postpage
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to= "/postpage" class="dropdown-item" href="/">NEW POST</Link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input 
        class="form-control me-2" type="search" 
        placeholder="Search" 
        aria-label="Search"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}/>
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
