//import React from 'react'

import { useEffect, useState } from "react";
import axios from 'axios';

import '../styles/GetPortfolio.css'

export default function GetPortfolio() {

  const [portfolios, setPortfolios] = useState([]);
  const fetchPortfolios = async () => {
    try {
      const res = await axios.get('http://localhost:8081/api/portfolio');
      setPortfolios(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);
  return (
    <>
    <main className="bg-[whitesmoke] h-[600vh] w-full Msection">
      
       <div className="Portfolio-Container">
          
          {portfolios.map((portfolio) => (
              <div key={portfolio._id} className="Portfolio-Item">
                <img
                  src={`http://localhost:8081/${portfolio.image}`}
                  alt="Portfolio"
                  className="Portfolio-Image"
                />
                <p className="Portfolio-Caption">{portfolio.caption}</p>
                <p className="Portfolio-host">{portfolio.host}</p>
              </div>
            ))}
          </div>
   
    </main>
    </>
    
  )
}
