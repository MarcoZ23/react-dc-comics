import comicsDigital from "../assets/img/buy-comics-digital-comics.png"
import comicsMerch from "../assets/img/buy-comics-merchandise.png"
import comicsSub from "../assets/img/buy-comics-subscriptions.png"
import comicsShop from "../assets/img/buy-comics-shop-locator.png"
import dcPower from "../assets/img/buy-dc-power-visa.svg"

export default function AppPost() {

    return (
        <ul className="nav justify-content-center bg-primary p-3 flex-nowrap py-4 position-relative z-2">
            <li className="nav-item d-flex align-items-center">
                <img src={comicsDigital} alt='comics digital' className="img-post"></img>
                <a className="nav-link active text-white" aria-current="page" href="#">DIGITAL COMICS</a>
            </li>
            <li className="nav-item d-flex align-items-center">
                <img src={comicsMerch} alt='comics merch' className="img-post"></img>
                <a className="nav-link text-white" href="#">DC MERCHANDISE</a>
            </li>
            <li className="nav-item d-flex align-items-center">
                <img src={comicsSub} alt='comics sub' className="img-post"></img>
                <a className="nav-link text-white" href="#">SUBSCRIPTION</a>
            </li>
            <li className="nav-item d-flex align-items-center">
                <img src={comicsShop} alt='comics shop' className="img-post"></img>
                <a className="nav-link text-white" href="#">COMIC SHOP LOCATOR</a>
            </li>
            <li className="nav-item d-flex align-items-center">
                <img src={dcPower} alt='power visa' className="img-post"></img>
                <a className="nav-link text-white" href="#">DC POWER VISA</a>
            </li>
        </ul>



    )
}