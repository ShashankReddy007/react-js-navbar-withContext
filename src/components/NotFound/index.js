// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const lightNotFound = () => (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <p>Not Found</p>
        </>
      )

      const darkNotFound = () => (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <p>Not Found</p>
        </>
      )

      return (
        <div className={`bg-container-${isDarkTheme}`}>
          <Navbar />
          {isDarkTheme ? darkNotFound() : lightNotFound()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
