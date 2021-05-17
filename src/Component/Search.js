import { useState, useEffect } from "react";
import Cake from "./Cake";
import queryString from "query-string";
import axios from "axios";

function Search(props) {
  var [cakeresult, setCakes] = useState([]);
  var [isloading, setloading] = useState(false);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl =
      "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    setloading(true);
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        // toast("Your Cakes");
        console.log(response.data);
        setCakes(response.data.data);
        setloading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [query.q]);

  return (
    <div>
      <div className="row">
        {isloading && (
          <div>
            {" "}
            <h1>Loading.....</h1>
          </div>
        )}
        {cakeresult.map((each) => {
          return <Cake cakedata={each} />;
        })}
      </div>
    </div>
  );
}

export default Search;
