import jumboJpg from "./assets/img/jumbotron.jpg"
import youtubeLogo from "./assets/img/footer-youtube.png"
import twitterLogo from "./assets/img/footer-twitter.png"
import pinterestLogo from "./assets/img/footer-pinterest.png"
import periscopeLogo from "./assets/img/footer-periscope.png"
import facebookLogo from "./assets/img/footer-facebook.png"
import bgLogo from "./assets/img/footer-bg.jpg"
import faviconLogo from "./assets/img/favicon.ico"
import dcLogo from "./assets/img/dc-logo.png"
import dcBgLogo from "./assets/img/dc-logo-bg.png"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import AppFooter from "./components/AppFooter"
import AppPost from "./components/AppPost"
function App() {


  return (
    <>
      <AppHeader />
      <AppMain />
      <AppPost />
      <AppFooter />
    </>
  )
}

export default App
