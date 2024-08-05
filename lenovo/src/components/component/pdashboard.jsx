
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import  {Link} from "react-router-dom"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { MdClear } from 'react-icons/md';
import {  useState } from "react"
import axios from 'axios';
import '../styles/vendordashbord.css'

export function Pdashboard() {
  //portfolio states
   const[portfolio, setPortfolio]=useState(false)
   const [image, setImage] = useState(null);
   const [caption, setCaption] = useState('');
  //  const [vendor, setVendor] = useState('');
  //  const [portfolios, setPortfolios] = useState([]);//ued for retrieving from database

   const onFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  // const onVendorChange = (e) => {
  //   setVendor(e.target.value);
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);
    // formData.append('vendor', vendor);

    try {
      const res = await axios.post('http://localhost:8081/api/portfolio/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      if (res.data.success) {
        setPortfolio(false);
        alert(res.data.message);
        // fetchPortfolios(); // Refresh portfolios after successful upload
      } else {
        alert('Failed to upload the portfolio item.');
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    (<div className="flex min-h-screen w-full bg-[whitesmoke]">
      <aside
        className="  left-0 relative z-10  w-[10rem] flex-col border-r bg-background flex mt-[1rem]">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}>
              <CameraIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Photography</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <LayoutGridIcon className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/NotificationPage "
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <BellIcon className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Notifications</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <MailIcon className="h-5 w-5" />
                  <span className="sr-only">Messages</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Messages</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <PlusIcon className="h-5 w-5" onClick={()=>setPortfolio(true)} />
                  <span className="sr-only">Add Portfolio</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Add Portfolio</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <CalendarIcon className="h-5 w-5" />
                  <span className="sr-only">Calendar</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Calendar</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="  flex h-14 items-center mr-5 rounded-md  px-4 ml-0 sm:border-0 bg-[#06355d] text-white sm:px-6 ">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium bg-[#06355d] ">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}>
                  <CameraIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Photography</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                  prefetch={false}>
                  <LayoutGridIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="/NotificationPage"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <BellIcon className="h-5 w-5" />
                  Notifications
                </Link>
                <Link
                  to="/NotificationPage"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <MailIcon className="h-5 w-5" />
                  Messages
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <PlusIcon className="h-5 w-5" />
                  Add Portfolio
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <CalendarIcon className="h-5 w-5" />
                  Calendar
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <Card
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#ffa500] to-[#ff6b6b]">
              <CardHeader
                className="absolute inset-0 z-10 flex flex-col items-start justify-between p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
                  <p className="text-white/80">Check out your upcoming events and plan accordingly.</p>
                </div>
                <Link
                  to="/EventPage"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#ff6b6b] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  prefetch={false}>
                  View Events
                </Link>
              </CardHeader>
              <CardContent className="relative z-0">
                <img
                  src="/placeholder.svg"
                  alt="Event background"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover opacity-30" />
              </CardContent>
            </Card>
            <Card
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#9b59b6] to-[#8e44ad]">
              <CardHeader
                className="absolute inset-0 z-10 flex flex-col items-start justify-between p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Portfolio</h3>
                  <p className="text-white/80">Showcase your best work and attract new clients.</p>
                </div>
                <Link
                  to='/GetPortfolio'
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#8e44ad] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  prefetch={false}>
                  Manage Portfolio
                </Link>
              </CardHeader>
              <CardContent className="relative z-0">
                <img
                  src="/placeholder.svg"
                  alt="Portfolio background"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover opacity-30" />
              </CardContent>
            </Card>
            <Card
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#2980b9] to-[#3498db]">
              <CardHeader
                className="absolute inset-0 z-10 flex flex-col items-start justify-between p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Messages</h3>
                  <p className="text-white/80">Stay connected with your clients and partners.</p>
                </div>
                <Link
                  to="/NotificationPage"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#3498db] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  prefetch={false}>
                  View Messages
                </Link>
              </CardHeader>
              <CardContent className="relative z-0">
                <img
                  src="/placeholder.svg"
                  alt="Messages background"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover opacity-30" />
              </CardContent>
            </Card>
            <Card
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#16a085] to-[#1abc9c]">
              <CardHeader
                className="absolute inset-0 z-10 flex flex-col items-start justify-between p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Calendar</h3>
                  <p className="text-white/80">Stay on top of your schedule and never miss an event.</p>
                </div>
                <Link
                  to="/VendorCalender"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#1abc9c] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  prefetch={false}>
                  View Calendar
                </Link>
              </CardHeader>
              <CardContent className="relative z-0">
                <img
                  src="/placeholder.svg"
                  alt="Calendar background"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover opacity-30" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      {/* form to addportfolios */}
      {
        portfolio && (
          <div className='w-[30rem] bg-white h-[55vh] Uploadcontainer'>
            <form onSubmit={handleSubmit}>
              <h2 id='content'>Upload your work
                <p><MdClear className="hover:bg-red-700 ml-[22rem] mt-[-1.4rem]" onClick={()=>setPortfolio(false)}></MdClear></p>
              </h2><hr />
              <div className='mt-[2rem]'>
                <label htmlFor="file" id='Labels'>images</label>
                <input type="file" id='file' name="image" onChange={onFileChange}/>
                <textarea name="caption" id="caption" onChange={onCaptionChange} ></textarea>
                 {/* <input type="text" id='vendor' onChange={onVendorChange} placeholder="Host name" /> */}
                <button type='submit' className='bg-blue-400 text-white font-serif text-xl mt-[0.8rem] ml-[3rem] w-[18rem] rounded-md'>Submit</button>
              </div>
            </form>
          </div>
        )
      }

     
      
     
    </div>)
  );
}

function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function CameraIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>)
  );
}


function LayoutGridIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function PlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}
