import jumboJpg from "./assets/img/jumbotron.jpg"
import bgLogo from "./assets/img/footer-bg.jpg"
import faviconLogo from "./assets/img/favicon.ico"
import dcLogo from "./assets/img/dc-logo.png"
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
