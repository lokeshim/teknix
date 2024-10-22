// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
           <section className="top-section ">
  <div className=" ">
    <nav className="navbar navbar-expand-lg  px-md-5 py-md-5 ">
      {/* Left-side Menu (visible on large screens) */}
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="./">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="elevators">
              ELEVATORS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="escalators">
              ESCALATORS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="about">
              SERVICES
            </a>
          </li>
        </ul>
      </div>
      {/* Center Logo */}
      <a className="navbar-brand mx-auto" href="./">
        <img src="img/logo-white.png" alt="Logo" />
      </a>
      {/* Right-side Menu (hamburger icon for small screens) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Right-side Menu */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="experience-center">
              {" "}
              EXPERIENCE CENTRE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="blog">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="contact">
              Contact
            </a>
          </li>
        </ul>
        {/* Left-side Menu for small screens */}
        <ul className="navbar-nav d-lg-none">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>

        </header>
    );
};

export default Header;
