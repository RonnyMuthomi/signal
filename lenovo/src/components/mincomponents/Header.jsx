

export default function Header() {
  return (
    <>
     <header className="flex bg-black h-14 items-center justify-between">
        <h1 className="text-white text-10">peersap</h1>
        <div className="m-5">
            <button className="bg-white mr-5 text-xl w-16">Login</button>
            <button className="bg-white text-xl w-20">Register</button>
        </div>
     </header> 
    </>
  )
}
