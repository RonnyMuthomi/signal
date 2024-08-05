import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/MessaHost.css';
import { CiAlarmOn } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";

export default function MessageHost() {
  const { portfolioId } = useParams();
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [userError, setUserError] = useState(null);

 const navigate=useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/event/photoG', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const result = await response.json();
        setUsers(result.users);
      } catch (error) {
        setUserError('Failed to fetch users. Please try again.');
        console.error(error);
      } finally {
        setLoadingUsers(false);
      }
    };

    if (token) {
      fetchUsers();
    } else {
      console.log('No token found, redirecting to login page');
      navigate('/Loginmodal');
    }
  }, [token,navigate]);

  const handleFormSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <>
      <main className="SECTIONMain">
        <div id="profileHolder">
          {loadingUsers ? (
            <p>Loading users...</p>
          ) : userError ? (
            <p>{userError}</p>
          ) : (
            users.map((user) => (
              <div key={user._id}>
                <p id="hostmessage">Message {user.username}</p>
                <div><CiAlarmOn className="mt-2 ml-[5rem] text-green-500" /></div>
                <p className="ml-[6.4rem] mt-[-1.3rem]"> Typically responds within 5hrs</p>
              </div>
            ))
          )}
        </div>
        <hr />

        <div className="clientMessage">
          <h2 className="ml-[5rem] font-bold">Introduce yourself and your activity</h2>
          <p className="ml-[5rem] mt-2">Share <a href="#" className="text-purple-500">*required details </a>with the host</p>

          <div id="FAQ">
            <h2> Event FAQ</h2>
            <p><a href="#" className="text-slate-500">View all</a></p>
          </div>
        </div>
        <hr />

        <BookingForm portfolioId={portfolioId} onFormSubmit={handleFormSubmit} />
      </main>
    </>
  );
}

function BookingForm({ portfolioId, onFormSubmit }) {
  const [selectdate, setSelectDate] = useState('');
  const [starttime, setStartTime] = useState('');
  const [endtime, setEndTime] = useState('');
  const [event, setEvent] = useState('');
  const [atendees, setAtendees] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    let timeoutId;

    if (feedbackMessage) {
      timeoutId = setTimeout(() => {
        setFeedbackMessage('');
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [feedbackMessage]);

  const onSubmit = async e => {
    e.preventDefault();

   

    const booking = { portfolioId, selectdate, starttime, endtime, event, atendees, location, message };

    try {
      const res = await axios.post('http://localhost:8081/api/bookings/create', booking);
      setFeedbackMessage(res.data.message);
      setSelectDate('');
      setStartTime('');
      setEndTime('');
      setEvent('');
      setAtendees('');
      setLocation('');
      setMessage('');
      onFormSubmit();
    } catch (err) {
      console.error('Error creating booking:', err);
      setFeedbackMessage('Failed to create booking. Please try again.');
    }
  };

  const startTimeOptions = generateTimeOptions(6, 21);
  const endTimeOptions = generateTimeOptions(7, 24);

  return (
    <main className='h-[100vh]'>
      <div className='Bookings-container'>
        {feedbackMessage && (
          <p className="feedback-message mt-4 text-center text-green-700 font-serif font-bold">
            {feedbackMessage} <IoCheckmark className="ml-[45rem] mt-[-1.3rem] font-bold" />
          </p>
        )}

        <form onSubmit={onSubmit}>
          <h2 className="text-xl font-semibold ml-[5rem] mt-3">Schedule an Event</h2>

          <div className="Container1">
            <p className='serif'>Date and time*</p>
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
          </div>


          <div>
            <label htmlFor="event" className="event">What are you planning?</label>
            <input
              type="text"
              name="event"
              placeholder="e.g., wedding, babyshower"
              id="event"
              className='wed'
              value={event}
              onChange={e => setEvent(e.target.value)}
            />
            <label htmlFor="atendees" className='atendees'>Attendees</label>
            <input
              type="text"
              name="atendees"
              placeholder=""
              id="atendees"
              value={atendees}
              onChange={e => setAtendees(e.target.value)}
            />
            <label htmlFor="location" className='location'>Location</label>
            <input
              type="text"
              name="location"
              placeholder=""
              id="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />

            <label htmlFor="message" className='message'>Message for host*</label>
            <textarea
              name="message"
              id="message"
              placeholder="Share more about you, describe your event, describe your plan for the event, and any other questions you might have"
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className='mt-[-12rem] ml-[63rem] bg-[#8559ec] h-[8vh] absolute w-[10rem] rounded-md font-serif text-xl text-white bookButton'
          >
            Message Host
          </button>
        </form>
       
      </div>
    </main>
  );
}

BookingForm.propTypes = {
  portfolioId: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

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
