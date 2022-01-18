import { FaBars, FaCartPlus, FaSearch } from "react-icons/fa";

const Header = () => {
    return(
      <header className="p-50">
        <div className="max-width">
            <div className="header-inner">
                <div className="header-logo-menu">
                    <a href="#" className="logo">Influencer products</a>

                    <div className="header-right">
                        <a href="#" className="nav-bar"><FaBars /></a>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Log In</a></li>
                            </ul>
                        </nav>
                        <div className="search-container">
                            <form action="#">
                                <input type="text" placeholder="Search" name="search" />
                                <button type="submit"><FaSearch /></button>
                            </form>
                        </div>

                        
                    </div>
                
                </div>
                <div className="chart"><FaCartPlus /></div>
            </div>
        </div>
    </header>
    )
}

export default Header;