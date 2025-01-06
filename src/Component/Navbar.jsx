import { Link } from "react-router-dom";


const Navbar = () => {
  
  const list = <>
    <div className="text-white flex gap-3">
      <Link><li>Home</li></Link>
      <Link><li>About</li></Link>
      <Link><li>Home</li></Link>
      <Link><li>Home</li></Link>
      <Link><li>Home</li></Link>

    </div>
  </>
  
  return (
        <div className="navbar bg-base-100 fixed z-10 bg-opacity-0 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black ">
          {list}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;