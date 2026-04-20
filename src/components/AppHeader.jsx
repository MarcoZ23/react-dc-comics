import dcLogo from "../assets/img/dc-logo.png"
export default function AppHeader() {

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

    const idAttivo = 2;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ms-5">
            <img src={dcLogo} alt='logo Dc' className="head-logo" />
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold py-4">
                        {
                            navEl.map((item) => (
                                <a key={item.id} href={item.path} className={`nav-link ${item.id === idAttivo ? 'text-primary border-bottom border-primary' : ''}`}>{item.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}