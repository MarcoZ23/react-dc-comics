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
const DcItem = [' Term Of Use', ' Privacy policy (New)', ' Ad Chices', ' Advertising', ' Jobs', ' Subscriptions', ' Talent Workshops', ' CPSC Certificates', ' Ratings', ' Shop Help', ' Contact Us']
const DcComics = [' Characters', ' Comics', ' Movies', ' Tv', ' Games', ' Videos', ' News']
const Shop = [' Shop DC', ' Shop DC Collectibles']
const Sites = [' DC', ' MAD Magazine', ' DC Kids', ' DC Universe', ' DC Power Visa']
function App() {


  return (
    <>
      <AppHeader navEl={navEl} />
      <AppMain />
      <AppPost />
      <AppFooter DcItem={DcItem} DcComics={DcComics} Shop={Shop} Sites={Sites} />
    </>
  )
}

export default App
