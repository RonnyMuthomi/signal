import  { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/GetPortfolio.css';

export default function GetPortfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [message, setMessage] = useState(""); // State for success/error messages
  const [messageType, setMessageType] = useState(""); // State to determine message type


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

  const handleEdit = (id) => {
    // Logic to handle edit
    console.log("Edit", id);
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete('http://localhost:8081/api/deletePortfolio/delete/' + id);
      if (response.data.success) {
        setMessage(response.data.message);
        setMessageType('success');
      }
    } catch (error) {
      setMessage('Error deleting item: ' + error.message);
      setMessageType('error');
    }
  };

  return (
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
            <div className="Portfolio-Actions">
              <button className="Portfolio-Edit" onClick={() => handleEdit(portfolio._id)}>Edit</button>
              <button className="" onClick={() => handleDelete(portfolio._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

    </main>
  );
}
