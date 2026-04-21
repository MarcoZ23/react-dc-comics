import dcLogo from "../assets/img/dc-logo.png"
export default function AppHeader({ navEl }) {



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