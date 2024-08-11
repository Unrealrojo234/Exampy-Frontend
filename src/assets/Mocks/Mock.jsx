import { useState,useEffect } from "react";


import BackToHome from "../keyAssets/BackToHome";

const mockApi = import.meta.env.VITE_REACT_API_MOCK;
export default function Mock(){
    const[mocks,setMocks] = useState([]);
    
    useEffect(()=>{
        fetch(mockApi)
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                setMocks(mocks=>data)
            })
            .catch(error=>console.log('Error', error));
    },[])

    const filePath = "../mockFilesPath";

    
    //const base64Data = mocks.map((mock)=>mock.examfile); // Your Base64 encoded data
    //const binaryData = Buffer.from(base64Data, 'base64');


    //const saveToFile = (binaryData, filePath) => {
    //fs.writeFile(filePath, binaryData, (err) => {
      //  if (err) throw err;
     //   console.log('File has been saved!');
    //});
    //}

    //saveToFile()



    return(
        <div className="container-fluid">
            <h1  className="text-center text-primary">Past Mock Exams for Candidates</h1>
            <div>
                <BackToHome/>
            </div>
            <div>
                {mocks.map((mock)=>(
                    <div>
                        <ul>
                            <li>
                                <h5>{mock.school}</h5>
                                <a download={"dwd"} href={mock.examfile}>Download</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}