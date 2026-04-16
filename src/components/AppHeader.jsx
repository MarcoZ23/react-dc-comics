import dcLogo from "../assets/img/dc-logo.png"
export default function AppHeader() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ms-5">
            <img src={dcLogo} alt='logo Dc' />
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold">
                        <a className="nav-link" href="#">CHARACTERS</a>
                        <a className="nav-link text-primary borde border-bottom border-primary" href="#">COMICS</a>
                        <a className="nav-link" href="#">MOVIES</a>
                        <a className="nav-link" href="#">TV</a>
                        <a className="nav-link" href="#">GAMES</a>
                        <a className="nav-link" href="#">COLLECTIBLES</a>
                        <a className="nav-link" href="#">VIDEOS</a>
                        <a className="nav-link" href="#">FANS</a>
                        <a className="nav-link" href="#">NEWS</a>
                        <a className="nav-link" href="#">SHOP</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}