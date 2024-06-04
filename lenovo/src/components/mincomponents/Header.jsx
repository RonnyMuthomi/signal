
import Modal from 'react-modal'; 
import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/Header.css';
import Regmodal from './Regmodal';
import { MdClear} from "react-icons/md";
import Loginmodal from './Loginmodal';


export default function Header() {
  const [modal,setModal]=useState(false);
  const [Visible,setVisible]=useState(false);
/*Hiding scroll-y when modal on*/
  if (modal){
    document.body.classList.add('active-modal')
  }
  else{
    document.body.classList.remove('active-modal')
  }
// 
if (Visible){
  document.body.classList.add('open-modal')
}
else{
  document.body.classList.remove('open-modal')
}
  return (
    <>
     <header className="flex bg-black h-14 items-center justify-between ">
        <Link className="text-white text-2xl m-10 font-bold font-mono">Peerspace</Link>
       
        <div className="m-5">
            <button className="bg-pink-600 text-[#fefefe] font-serif mr-7 rounded-[5px] text-xl w-16 p-1" 
            onClick={()=>setVisible(true)}>Login</button>
            <button className="bg-pink-600 text-[#fefefe] font-serif text-xl rounded-[5px] w-20 p-1" onClick={()=>setModal(true)}>Sign up</button>
        </div>
     </header> 
    {/*registration modal */}
     <Modal id='register-modal' isOpen={modal} onRequestClose={()=>setModal(false)} style={{
      overlay:{
        background:"rgba(49, 49, 49, 0.8)"
      }
     }} appElement={document.getElementById('root')}>
     <div className="ml-[95%] text-3xl hover:bg-red-600" onClick={()=>setModal(false)}>
       <MdClear/>
     </div>
     
      <Regmodal setModal={setModal} />
     </Modal>
      {/*login modal */}
      <Modal isOpen={Visible} onRequestClose={()=>setVisible(false)} style={{
         overlay:{
        background:"rgba(49, 49, 49, 0.8)"
      }
      }} appElement={document.getElementById('root')}
      className="login-modal">
      <div className="ml-[90%] text-3xl hover:bg-red-600" onClick={()=>setVisible(false)}>
       <MdClear/>
     </div>
        <Loginmodal></Loginmodal>
      </Modal>
    </>
  )
}
