
const DcComics = [' Characters', ' Comics', ' Movies', ' Tv', ' Games', ' Videos', ' News']


export default function AppFooter() {

    return (
        <footer>
            {DcComics.map((item, index) => (
                <a href='#' key={index}>{item}</a>
            ))
            }



        </footer>
    )
}