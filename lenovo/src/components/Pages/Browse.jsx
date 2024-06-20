import '../styles/browse.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

export default function Browse() {
  
 
  // //fetch endpoint
  const [portfolios, setPortfolios] = useState([]);
 
  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await axios.get('http://localhost:8081/api/portfolio');
        setPortfolios(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <>
      <main className="w-full bg-[whitesmoke] h-full">
        <section className="rock1">
       
          <div>
            <h1>Portfolio Gallery</h1>
            <div className="grid-container">
            
              {portfolios.map(portfolio => (
                <div key={portfolio._id} className="grid-item" >
                <Link to={`/portfolio/${portfolio._id}`}>
                  <img src={`http://localhost:8081/${portfolio.image}`} alt="Portfolio" />
                  <p>{portfolio.caption}</p>
                </Link>
                </div>
              ))}
            </div>
            {/* {selectedPortfolio && <BookingForm portfolioId={selectedPortfolio} />} */}
          </div>
        </section>
      </main>
    </>
  );
}
