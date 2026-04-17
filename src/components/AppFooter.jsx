const DcItem = [' Term Of Use', ' Privacy policy (New)', ' Ad Chices', ' Advertising', ' Jobs', ' Subscriptions', ' Talent Workshops', ' CPSC Certificates', ' Ratings', ' Shop Help', ' Contact Us']
const DcComics = [' Characters', ' Comics', ' Movies', ' Tv', ' Games', ' Videos', ' News']
const Shop = [' Shop DC', ' Shop DC Collectibles']
const Sites = [' DC', ' MAD Magazine', ' DC Kids', ' DC Universe', ' DC Power Visa']
import dcBgLogo from "../assets/img/dc-logo-bg.png"
import facebookLogo from "../assets/img/footer-facebook.png"
import twitterLogo from "../assets/img/footer-twitter.png"
import youtubeLogo from "../assets/img/footer-youtube.png"
import pinterestLogo from "../assets/img/footer-pinterest.png"
import periscopeLogo from "../assets/img/footer-periscope.png"
export default function AppFooter() {

    return (
        <footer className="container m-0">
            <div className="row">
                <div className="col-2 d-flex flex-column">
                    <h4 className="fw-bold text-white mt-4">DC COMICS</h4>
                    {DcComics.map((item, index) => (
                        <a href='#' className="text-decoration-none text-white-50" key={index}>{item}</a>
                    ))
                    }
                    <h4 className="fw-bold text-white mt-2">SHOP</h4>
                    {Shop.map((item, index) => (
                        <a href='#' className="text-decoration-none text-white-50" key={index}>{item}</a>
                    ))
                    }
                </div>
                <div className="col-2 d-flex flex-column">
                    <h4 className="fw-bold text-white mt-4">DC</h4>
                    {DcItem.map((item, index) => (
                        <a href='#' className="text-decoration-none text-white-50" key={index}>{item}</a>
                    ))
                    }
                </div>
                <div className="col-2 d-flex flex-column">
                    <h4 className="fw-bold text-white mt-4">SITES</h4>
                    {Sites.map((item, index) => (
                        <a href='#' className="text-decoration-none text-white-50" key={index}>{item}</a>
                    ))
                    }
                </div>
                <img src={dcBgLogo} alt="DC logo" className="img-bg flex-nowrap position-absolute start-50 bottom-50"></img>
            </div>
            <div className="container bg-dark py-4 position-relative">
                <button className="ms-4 border border-primary border-2 bg-dark text-white fw-bold p-2">SIGN-UP NOW!</button>
                <span className="text-primary fw-bold position-relative start-50">FOLLOW US</span>
                <span>
                    <img src={facebookLogo} alt='facebook' className="position-relative start-50 p-2"></img>
                    <img src={twitterLogo} alt='twitter' className="position-relative start-50 p-2"></img>
                    <img src={youtubeLogo} alt='youtube' className="position-relative start-50 p-2"></img>
                    <img src={pinterestLogo} alt='pinterest' className="position-relative start-50 p-2"></img>
                    <img src={periscopeLogo} alt='periscope' className="position-relative start-50 p-2"></img>
                </span>
            </div>

        </footer>
    )
}