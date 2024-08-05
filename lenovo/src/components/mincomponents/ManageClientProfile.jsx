import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/career.css';
import ListData from '../mincomponents/ListData';

export default function ManageClientProfile() {
  const [dataList, setDataList] = useState([]);
  const [editSection, setEditSection] = useState(false);
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    id: ""
  });

  const [message, setMessage] = useState(""); // State for success/error messages
  const [messageType, setMessageType] = useState(""); // State to determine message type

  useEffect(() => {
    let timer;
    if (message) {
      // Set a timeout to clear the message after 3 seconds
      timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
    }
    // Cleanup the timeout on component unmount or when the message changes
    return () => clearTimeout(timer);
  }, [message]);

  const getFetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/');
      if (response.data.success) {
        setDataList(response.data.data);
        setMessage(response.data.message);
        setMessageType('success');
      }
    } catch (error) {
      setMessage('Error fetching data: ' + error.message);
      setMessageType('error');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete('http://localhost:8081/delete/' + id);
      if (response.data.success) {
        getFetchData();
        setMessage(response.data.message);
        setMessageType('success');
      }
    } catch (error) {
      setMessage('Error deleting item: ' + error.message);
      setMessageType('error');
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/two/register', formData);
      if (response.data.success) {
        setAddSection(false);
        setMessage(response.data.message);
        setMessageType('success');
        getFetchData();
      }
    } catch (error) {
      setMessage('Error submitting form: ' + error.message);
      setMessageType('error');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8081/update', formDataEdit);
      if (response.data.success) {
        setEditSection(false);
        setMessage(response.data.message);
        setMessageType('success');
        getFetchData();
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      setMessage('Error updating item: ' + error.message);
      setMessageType('error');
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      <main className='h-screen'>

      {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}



        <div className='tableContainer'>
          <table>
            <thead className='roundend'>
              <tr>
                <th id='ths'>FName</th>
                <th id='ths'>LName</th>
                <th id='ths'>Email</th>
                <th id='ths'>Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataList.length > 0 ? (
                dataList.map((el, index) => (
                  <tr key={index}>
                    <td>{el.firstname}</td>
                    <td>{el.lastname}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td>
                      <button className="mr-3 bg-green-600" onClick={() => handleEdit(el)}>Edit</button>
                      <button className="bg-red-500" onClick={() => handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

        {addSection && (
          <ListData
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <ListData
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}
      </main>
    </div>
  );
}











