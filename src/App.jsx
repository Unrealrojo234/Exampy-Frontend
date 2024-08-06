import Header from "./assets/Header"
import Search from "./assets/Search"
import Images from "./assets/Images"
import Footer from "./assets/Footer"

export default function App (){
    return(
        <div className="container-fluid">
            <Header/>
            <Search/>
            <Images/>
            <div className="fixed-bottom start-1">
                <Footer/>
            </div>
        </div>
    )
}