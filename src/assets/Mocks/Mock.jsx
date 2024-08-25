import { useState, useEffect } from "react";

import BackToHome from "../keyAssets/BackToHome";

const mockApi = import.meta.env.VITE_REACT_API_MOCK;
export default function Mock() {
  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    fetch(mockApi)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMocks((mocks) => data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">
        Past Mock Exams for Candidates
      </h1>
      <div>
        {mocks.map((mock) => (
          <div key={mock._id}>
            <div className="card" style={{padding:'10px'}}>
              <h5>{mock.school}</h5>
              <span>{mock.name}</span>
              <a style={{textDecoration:'none',display:'inline-block'}} href={mock.exampdf} download={mock.name}>
                Download
              </a>
            </div>
          <br/>
          </div>
        ))}
      </div>
      <br />
      <div>
        <BackToHome />
      </div>
    </div>
  );
}
