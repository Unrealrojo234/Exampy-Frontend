import { Link } from "react-router-dom"
import BackToHome from "./keyAssets/BackToHome"

export default function Search (){
    return(
        <div>
            <h1>Available Contents</h1>
            <div>
                <ul>
                    <li>
                        <h3 style={{textDecoration:'underline'}}>
                            <Link to={'/papers'}>Past Exams</Link>
                        </h3>
                    </li>
                    <li>
                        <h3 style={{textDecoration:'underline'}}>
                            <Link to={'/mocks'}>Past Mocks</Link>
                        </h3>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
