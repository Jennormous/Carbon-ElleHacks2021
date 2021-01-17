import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav class='white' role='navigation'>
        <div class='nav-wrapper container'>
          <Link
            to='/'
            id='logo-container'
            class='brand-logo green-text text-accent-2'>
            Carbon
          </Link>
          <ul class='right hide-on-med-and-down'>
            <li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/grocery'>Inventory</Link>
              </li>
              <li>
                <Link to='/recipe'>Recipes</Link>
              </li>
            </li>
          </ul>

          <ul id='nav-mobile' class='sidenav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/grocery'>Inventory</Link>
            </li>
            <li>
              <Link to='/recipe'>Recipes</Link>
            </li>
          </ul>
          <a href='#' data-target='nav-mobile' class='sidenav-trigger'>
            <i class='material-icons'>menu</i>
          </a>
        </div>
      </nav>
    </header>

  );
}
