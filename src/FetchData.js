import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FetchData.css";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="product-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <div className="card-description">
            <h6 className="user-id">{`User Id: ${item.userId}`}</h6>
            <h6 className="title">{`Title: ${item.title}`}</h6>
            <h6 className="body">{`Body: ${item.body}`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
