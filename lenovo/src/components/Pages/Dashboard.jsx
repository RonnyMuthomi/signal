import { useEffect, useState } from 'react';
import '../styles/career.css';
import { FaEnvelope, FaUser } from "react-icons/fa";
import { MdClear } from 'react-icons/md';
import { Link } from "react-router-dom";
import axios from 'axios';
import ListData from '../mincomponents/ListData';

export default function Dashboard() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    id: ""
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const getFetchData = async () => {
    const data = await axios.get('http://localhost:8081/');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('http://localhost:8081/create', formData);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('http://localhost:8081/update', formDataEdit);
    if (data.data.success) {
      setEditSection(false);
      getFetchData();
      alert(data.data.message);
      setFormData({
        name: "",
        email: "",
        mobile: "",
      });
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('http://localhost:8081/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
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

  useEffect(() => {
    getFetchData();
  }, []);

  // Portfolio upload section
  const [addPortfolio, setAddPortfolio] = useState(false);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [portfolios, setPortfolios] = useState([]);

  const onFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);

    try {
      const res = await axios.post('http://localhost:8081/api/portfolio/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      if (res.data.success) {
        setAddPortfolio(false);
        alert(res.data.message);
        fetchPortfolios(); // Refresh portfolios after successful upload
      } else {
        alert('Failed to upload the portfolio item.');
      }
    } catch (err) {
      console.error(err);
    }
  };

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
      <main className="bg-stone-500 w-full h-[400vh]">
        <section className="grid w-full bg-[whitesmoke] h-[400vh]">
          <div className="bg-[#06355d] m-3 w-[10rem] h-[85vh] mt-5 rounded-sm">
            <div>
              <FaEnvelope className="m-2 mt-[1.28rem] text-white text-xl" />
              <div className="mt-[-1.8rem] m-8 text-white font-serif text-xl">
                <Link>Dashboard</Link>
              </div>
            </div>
            <div>
              <FaUser className="m-2 mt-5 text-white text-xl" />
              <div className="mt-[-1.8rem] m-8 bg-blue-400 rounded-md text-white font-serif text-xl">
                <button onClick={() => setAddSection(true)}>Add User</button>
              </div>
            </div>
            <div>
              <FaUser className="m-2 mt-5 text-white text-xl" />
              <div className="mt-[-1.8rem] m-8 bg-blue-400 rounded-md text-white font-serif text-xl">
                <button onClick={() => setAddPortfolio(true)}>Add Portfolio</button>
              </div>
            </div>
          </div>

          <div className='tableContainer'>
            <table>
              <thead className='roundend'>
                <tr>
                  <th id='ths'>Name</th>
                  <th id='ths'>Email</th>
                  <th id='ths'>Mobile</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dataList.length > 0 ? (
                  dataList.map((el, index) => (
                    <tr key={index}>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td>
                        <button className="mr-3 bg-green-600" onClick={() => handleEdit(el)}>Edit</button>
                        <button className="bg-red-500" onClick={() => handleDelete(el._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{textAlign: "center"}}>No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

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
        
        {/* portfolio section container */}
        {addPortfolio && (
          <div className='w-[30rem] bg-red-600 h-[55vh] Uploadcontainer'>
            <form onSubmit={onSubmit}>
              <h2 id='content'>Upload your work
                <p><MdClear className="hover:bg-red-700 ml-[22rem] mt-[-1.4rem]" onClick={() => setAddPortfolio(false)}></MdClear></p>
              </h2><hr />
              <div className='mt-[2rem]'>
                <label htmlFor="file" id='Labels'>images</label>
                <input type="file" id='file' onChange={onFileChange} />
                <textarea name="caption" id="caption" value={caption} onChange={onCaptionChange}></textarea>
                {/* <input type="text" value={caption} onChange={onCaptionChange} placeholder="Add captions for your images" id='caption'/> */}
                <button type='submit' className='bg-blue-400 text-white font-serif text-xl mt-[0.8rem] ml-[3rem] w-[18rem] rounded-md'>Submit</button>
              </div>
            </form>
          </div>
        )}

          <div className="portfolio-container">
          
          {portfolios.map((portfolio) => (
              <div key={portfolio._id} className="portfolio-item">
                <img
                  src={`http://localhost:8081/${portfolio.image}`}
                  alt="Portfolio"
                  className="portfolio-image"
                />
                <p className="portfolio-caption">{portfolio.caption}</p>
              </div>
            ))}
          </div>
            
         
        </section>
      </main>
    </>
  );
}
