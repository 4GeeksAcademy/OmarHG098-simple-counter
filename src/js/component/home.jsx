import React from "react";

import { element } from "prop-types";

//create your first component
const Home = ({ counter }) => {
  const count = counter.toString().padStart(6, "0");
  const countArray = count.split("");
  console.log(countArray);

  return (
    <div className="text-center my-5">
      <div>
        <div className="container text-center bg-dark text-light p-3 my-2">
          <div className="row fs-1">
            <div className="col bg-gradient mx-1">
              <i className="far fa-clock"></i>
            </div>
            {countArray.map((element, index) =>{
				return(<div className="col bg-gradient mx-1" key={element + index}>{element}</div>)
			})}
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
