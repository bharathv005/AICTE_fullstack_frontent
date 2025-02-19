import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand fw-bold text-warning" href="#">GoGrab</a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active  text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active  text-white" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active  text-white" aria-current="page" href="#">Contact US</a>
        </li>
    
      </ul>
      <a class="btn btn-outline-light text-white px-3 custom-login-btn" href="/login">Login</a>
        <a class="btn btn-success text-white px-3 custom-register-btn" href="/register">Register</a>


    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
