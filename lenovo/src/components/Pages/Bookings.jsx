import  { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/booking.css';
//import { DatePicker } from '../component/date-picker';

export default function Bookings() {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [responseMessage, setResponseMessage]=useState('')

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/api/one/${portfolioId}`);
        setPortfolio(res.data);
      } catch (err) {
        setError('Failed to fetch portfolio data. Please try again later.');
      }
    };
    fetchPortfolio();
  }, [portfolioId]);

  const handleFormSubmit = () => {
    setIsFormCompleted(true);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <main className='bg-[white] h-full'>
      <div className="Portfolio-detail">
        <img src={`http://localhost:8081/${portfolio.image}`} alt="Portfolio" className='portfolio-Image' />
        <h2>{portfolio.caption}</h2>
        <BookingForm portfolioId={portfolioId} onFormSubmit={handleFormSubmit} />

       
       
        <div className='Host'>
          {isFormCompleted ? (
            <Link to="/MessageHost">
              <button>Message Host</button>
            </Link>
          ) : (
            <button onClick={() => setResponseMessage('Please complete the booking form first.')}>Message Host</button>
          )}
        </div>
        {responseMessage && <div className="response-message">{responseMessage}</div>}
      </div>
    </main>
  );
}

function generateTimeOptions(startHour, endHour) {
  const options = [];
  let start = new Date();
  start.setHours(startHour, 0, 0, 0);
  const end = new Date();
  end.setHours(endHour, 0, 0, 0);

  while (start <= end) {
    const hours = start.getHours();
    const minutes = start.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    options.push(
      `${displayHours}:${displayMinutes} ${ampm}`
    );
    start.setMinutes(start.getMinutes() + 30);
  }

  return options;
}

function BookingForm({ portfolioId, onFormSubmit }) {
  const [selectdate, setSelectDate] = useState('');
  const [starttime, setStartTime] = useState('');
  const [endtime, setEndTime] = useState('');
  //const [message, setMessage] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const booking = { portfolioId, selectdate, starttime, endtime };

    try {
      const res = await axios.post('http://localhost:8081/api/bookings/create', booking);
      alert(res.data.message);
      onFormSubmit(); // Update form completion status
    } catch (err) {
      console.error('Error creating booking:', err);
    }
  };

  const startTimeOptions = generateTimeOptions(6, 21); // 6 AM to 9 PM
  const endTimeOptions = generateTimeOptions(7, 24); // 7 AM to 12 AM

  return (
    <main className='h-[100vh]'>
      <div className='Bookings-container'>
        <p className='ml-[25%] mt-5 serif'>Date and time*</p>
        <hr />
        <form onSubmit={onSubmit}>
          <h2 className="text-xl font-semibold ml-5 mt-3">Schedule an Event</h2>
          <p className="text-muted-foreground ml-5 mt-2">Select a date and time for your event.</p>
          <input
            type="date"
            placeholder="Select a date"
            value={selectdate}
            onChange={e => setSelectDate(e.target.value)}
            className='INputs'
            id='selectdate'
          />
          
          <select
            id='starttime'
            value={starttime}
            onChange={e => setStartTime(e.target.value)}
            className='starttime'
          >
            <option value="">Start time</option>
            {startTimeOptions.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
          
          <select
            id='endtime'
            value={endtime}
            onChange={e => setEndTime(e.target.value)}
            className='endtime'
          >
            <option value="">End time</option>
            {endTimeOptions.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
          
          <button type="submit" className='mt-[3rem] ml-[3rem] bg-[#8559ec] h-[6vh] w-[20rem] rounded-md font-serif text-xl text-white'>Start Booking</button>
        </form>
      </div>
      {/* <DatePicker /> */}
    </main>
  );
}

BookingForm.propTypes = {
  portfolioId: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
