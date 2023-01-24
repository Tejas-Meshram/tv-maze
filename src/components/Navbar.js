import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <nav className="navbar-nav">
                <h3 className="nav-logo">
                    <Link to="/">
                        TV MAZE
                    </Link>
                </h3>
                <SearchBar/>
            </nav>
        </div>
    </div>
  )
}

export default Navbar