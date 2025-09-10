import { memo } from 'react'
import dashbord from "../assets/dashbord.svg"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={dashbord} alt="Dashboard Logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" className="sidebar-link">
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className="sidebar-link">
            User
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className="sidebar-link">
            Product
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default memo(Sidebar)
