import React, {Component} from "react";


class Header extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){

        const styles = {
            
        }

        return(
            <div>
                <h1  style={{fontSize:styles.fontSize, letterSpacing:styles.letterSpacing}} className="text-center text-primary">Exampy 
                <i>🤓</i>
                </h1>
                <br/>
                <p>The site for free educational materials e.g pastpapers and books 👇</p>
            </div>
        )
    }
}

export default Header