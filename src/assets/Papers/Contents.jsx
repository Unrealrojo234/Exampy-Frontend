import { Link } from "react-router-dom";
import './Contents.css'

export default function Contents(){
    
    return(
        <div className="container-fluid past-papers">
            <h1 className="text-center" style={{textDecoration:'underline'}}>Past Papers</h1>            
            <br />
            <h3>SUBJECTS:</h3>
            <div className="text-start">
                <ul>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/english'} className="link">English</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/mathematics'} className="link">Mathematics</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/kiswahili'} className="link">Kiswahili</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/chemistry'} className="link">Chemistry</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/biology'} className="link">Biology</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/physics'} className="link">Physics</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/geography'} className="link">Geography</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/history'} className="link">History</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/business'} className="link">Business</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/computer'} className="link">Computer Studies</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            <p>
                                <Link to={'/french'} className="link">French</Link>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}