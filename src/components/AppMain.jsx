import comics from "./comics"
import jumboJpg from "../assets/img/jumbotron.jpg"
import ComicCard from "./ComicCard"
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
                        <ComicCard key={comic.id} comic={comic}></ComicCard>
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