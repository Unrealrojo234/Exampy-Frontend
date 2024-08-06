import React , {Component} from "react";
import grad from './images/first.jpeg'

class Images extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <img className="img-fluid rounded" src={grad} alt="image1" />
            </div>
        );
    }
}
export default Images