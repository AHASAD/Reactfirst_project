import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/section", label: "Section" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          DESUN
        </Link>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link to={item.path} className={`nav-link ${location.pathname === item.path ? "active" : ""}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
