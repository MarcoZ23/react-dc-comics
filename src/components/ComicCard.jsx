export default function ComicCard({ comic }) {

    return (
        <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="card mt-4 bg-black text-white">
                <img src={comic.thumb} alt={comic.title} className="img-card card-img-top"></img>
                <div className="card-body">
                    <h4 className="">{comic.series}</h4>
                </div>
            </div>
        </div>
    )
}






