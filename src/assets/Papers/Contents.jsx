import { Link } from "react-router-dom";
import './Contents.css'
import BackToHome from "../keyAssets/BackToHome";

export default function Contents(){
    $('subject-container').css('container')
    return(
        <div className="container-fluid past-papers">
            <h1 className="text-center" style={{textDecoration:'underline'}}>Past Papers</h1>            
            <br />
            <h3>SUBJECTS:</h3>
            <div className="text-start">
                <ul>
                    <li>
                        <div className="subjects">
                            
                                <div className=" subject-container">
                                    <Link to={'/english'} className="link">English</Link>
                                </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/mathematics'} className="link">Mathematics</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                                <div className="subject-container">
                                    <Link to={'/kiswahili'} className="link">Kiswahili</Link>
                                </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/chemistry'} className="link">Chemistry</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/biology'} className="link">Biology</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/physics'} className="link">Physics</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/geography'} className="link">Geography</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/history'} className="link">History</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">

                                <Link to={'/business'} className="link">Business</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/computer'} className="link">Computer Studies</Link>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="subjects">
                            
                            <div className="subject-container">
                                <Link to={'/french'} className="link">French</Link>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </div>
            <BackToHome/>
        </div>
    );
}
