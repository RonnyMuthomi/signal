import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/booking.css'

export default function Bookings() {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        console.log(`Fetching portfolio data for ID: ${portfolioId}`);
        const res = await axios.get(`http://localhost:8081/api/one/${portfolioId}`);
        console.log('Fetched portfolio data:', res.data);
        setPortfolio(res.data);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError('Failed to fetch portfolio data. Please try again later.');
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <main className='bg-[white] h-full'>
       <div className="portfolio-detail">
      <img src={`http://localhost:8081/${portfolio.image}`} alt="Portfolio" />
      <h2>{portfolio.caption}</h2>
      <BookingForm portfolioId={portfolioId} />
    </div>
    </main>
   
  );
}

function BookingForm({ portfolioId }) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const booking = { portfolioId, clientName, clientEmail, bookingDate, message };

    try {
      const res = await axios.post('http://localhost:8081/api/bookings/create', booking);
      alert(res.data.message);
      console.log('Booking created:', res.data);
    } catch (err) {
      console.error('Error creating booking:', err);
    }
  };

  return (

    <div className='bookings-container'>
    <p className='ml-[25%] mt-5 serif' >Manage Bookings</p><hr />
       <form onSubmit={onSubmit}>
       <label htmlFor="clientName"  id='LAbels'>Name</label>
      <input
        type="text"
        placeholder="Your Name"
        value={clientName}
        onChange={e => setClientName(e.target.value)}
        className='INputs'
        id='clientName'
      />
      <label htmlFor="clientEmail"  id='LAbels'>Email</label>
      <input
        type="email"
        placeholder="Your Email"
        value={clientEmail}
        onChange={e => setClientEmail(e.target.value)}
         className='INputs'
         id='clientEmail'
      />
      <label htmlFor="bookingDate" id='LAbels'>Date</label>
      <input
        id='bookingDate'
        type="date"
        value={bookingDate}
        onChange={e => setBookingDate(e.target.value)}
         className='INputs'
      /> <br />
      {/* <label htmlFor="message">message host</label> */}
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className='ml-[3rem] w-[15rem] outline-none'
      ></textarea><br />
      <button type="submit" className='mt-3 ml-[3rem] bg-blue-500 h w-[15rem] rounded-md'>StartBooking</button>
    </form>

    </div>
   
  );
}

BookingForm.propTypes = {
  portfolioId: PropTypes.string.isRequired,
};
