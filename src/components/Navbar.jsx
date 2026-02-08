import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `relative cursor-pointer after:block after:h-[2px] after:bg-indigo-400 after:transition-all
     ${
       isActive
         ? "text-white after:w-full"
         : "text-slate-300 after:w-0 hover:after:w-full"
     }`;

  return (
    <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      
      {/* Logo */}
      <NavLink to="/home" className="flex items-center gap-2">
        <img
          src={Logo}
          alt="Bilal Khan Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-bold tracking-wide">
          Bilal Khan
        </span>
      </NavLink>

      {/* Navigation */}
      <ul className="flex gap-6 text-sm">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={navLinkClass}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
