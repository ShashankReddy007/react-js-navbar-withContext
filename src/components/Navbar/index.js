// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const darkNavbar = () => (
        <>
          <img
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
          />
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <button className="toggle-btn" type="button" onClick={toggleTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
            />
          </button>
        </>
      )

      const lightNavbar = () => (
        <>
          <img
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
          />
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <button className="toggle-btn-2" type="button" onClick={toggleTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
            />
          </button>
        </>
      )

      return (
        <nav className={`navbar-${isDarkTheme}`}>
          {isDarkTheme ? darkNavbar() : lightNavbar()}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
