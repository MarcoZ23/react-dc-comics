import comics from "./comics"
import jumboJpg from "../assets/img/jumbotron.jpg"
export default function AppMain() {

    return (
        <main>
            <div>
                <img src={jumboJpg} alt='jumbotron' className="jumbo"></img>
                <span className=" stand bg-primary text-white fw-bold col-3 ms-4 text-center position-absolute start-0 p-1 z-3">CURRENT SALES</span>
            </div>
            <div className="container-fluid bg-black">
                <div className="row">
                    {comics.map((comic) => (
                        <div className="col-sm-6 col-md-4 col-lg-2">
                            <div className="card mt-4 bg-black text-white" key={comic.id}>
                                <img src={comic.thumb} alt={comic.title} className="img-card card-img-top"></img>
                                <div className="card-body">
                                    <h4 className="">{comic.series}</h4>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mb-3 rounded-0">LOAD MORE</button>
                </div>
            </div>

        </main>
    )
}