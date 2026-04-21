import faviconLogo from "./assets/img/favicon.ico"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import AppFooter from "./components/AppFooter"
import AppPost from "./components/AppPost"

const navEl = [
  {
    id: 1,
    text: 'CHARACTERS',
    path: '#'
  },
  {
    id: 2,
    text: 'COMICS',
    path: '#'
  },
  {
    id: 3,
    text: 'MOVIES',
    path: '#'
  },
  {
    id: 4,
    text: 'TV',
    path: '#'
  },
  {
    id: 5,
    text: 'GAMES',
    path: '#'
  },
  {
    id: 6,
    text: 'COLLECTIBLES',
    path: '#'
  },
  {
    id: 7,
    text: 'VIDEOS',
    path: '#'
  },
  {
    id: 8,
    text: 'FANS',
    path: '#'
  },
  {
    id: 9,
    text: 'NEWS',
    path: '#'
  },
  {
    id: 10,
    text: 'SHOP',
    path: '#'
  }
]
function App() {


  return (
    <>
      <AppHeader navEl={navEl} />
      <AppMain />
      <AppPost />
      <AppFooter />
    </>
  )
}

export default App
