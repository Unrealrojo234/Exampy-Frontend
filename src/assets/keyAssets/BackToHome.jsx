import { Link } from "react-router-dom"

export default function BackToHome (){
    return(
        <div className="container-fluid fixed-bottom p-2  text-center">
            <Link style={{textDecoration:'none',display:'inline-block'}} to={'/'}> <i className="fa-solid fa-house-chimney fa-2xl"></i></Link>
        </div>
    )
}