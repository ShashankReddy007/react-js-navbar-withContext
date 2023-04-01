// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const lightHome = () => (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
            alt="home"
          />
          <p>Home</p>
        </>
      )

      const darkHome = () => (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
            alt="home"
          />
          <p>Home</p>
        </>
      )

      return (
        <div className={`bg-container-${isDarkTheme}`}>
          <Navbar />
          {isDarkTheme ? darkHome() : lightHome()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
