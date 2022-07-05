import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div class="navbar bg-neutral text-neutral-content">
        <div class="flex-1">
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            John Lundy's Portfolio
          </Link>
        </div>
        <div class="flex-none menu-options-container">
          <ul class="menu menu-horizontal p-0 menu-options">
            <Link to="/portfolio" className="link-tags">
              <a>Portfolio</a>
            </Link>
            <Link to="/about-me" className="link-tags">
              <a>About Me</a>
            </Link>
            <Link to="/resume" className="link-tags">
              <a>Resume</a>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
