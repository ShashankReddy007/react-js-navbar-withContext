// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const lightAbout = () => (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
            alt="about"
          />
          <p>About</p>
        </>
      )

      const darkAbout = () => (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
            alt="about"
          />
          <p>About</p>
        </>
      )

      return (
        <div className={`bg-container-${isDarkTheme}`}>
          <Navbar />
          {isDarkTheme ? darkAbout() : lightAbout()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
