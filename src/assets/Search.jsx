import { Link } from "react-router-dom"

export default function Search (){
    return(
        <div>
            <h1>Available Contents</h1>
            <br />
            <div className="row text-center space-2">
                <div className="col d-grid">
                    <button className="btn  btn-success">
                        <Link style={{textDecoration:'none',color:'white'}} to={'/papers'}> Past Papers</Link>
                    </button>
                </div>
                <div className="col d-grid">
                    <button className="btn btn-info">
                        <Link style={{textDecoration:'none',color:'black'}} to={'/books'}>Past Mocks</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
