import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MessageHost() {
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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
        setUsers(result.users); // Adjust this based on your API response structure
      } catch (error) {
        console.error(error);
        navigate('/Loginmodal'); // Navigate to login page if there is an error
      }
    };

    if (token) {
      fetchUsers();
    } else {
      console.log('No token found, redirecting to login page');
      navigate('/Loginmodal'); // Navigate to login page if token is missing
    }
  }, [token, navigate]);

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
}
