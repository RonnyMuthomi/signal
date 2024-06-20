import { useEffect, useState } from 'react';
import axios from 'axios';

const PortfolioLists = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/portfolio');
        setPortfolios(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <div>
      {portfolios.map(portfolio => (
        <div key={portfolio._id}>
          <img src={`http://localhost:5000/${portfolio.image}`} alt="Portfolio" />
          <p>{portfolio.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioLists;
