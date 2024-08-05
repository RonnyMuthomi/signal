
import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function EventPage() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header
        className="bg-white text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link to="/VendorDashboard" className="flex items-center gap-2" prefetch={false}>
          <CameraIcon className="w-6 h-6 text-black" />
          <span className="text-xl font-bold text-black">Capture</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <SearchIcon className="w-5 h-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <img
                  src="/placeholder.svg"
                  width={32}
                  height={32}
                  alt="Avatar"
                  className="rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6">
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button variant="outline" size="sm">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>
          <Calendar mode="month" initialFocus className="rounded-lg overflow-hidden" />
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">All Events</h2>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>Upcoming</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Past</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Cancelled</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ListOrderedIcon className="w-4 h-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="date">
                    <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="location">Location</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Wedding Photography</div>
                  <div className="text-sm text-muted-foreground">John and Jane Doe</div>
                </TableCell>
                <TableCell>June 15, 2024</TableCell>
                <TableCell>3:00 PM - 8:00 PM</TableCell>
                <TableCell>Acme Hotel, New York</TableCell>
                <TableCell className="text-right">
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Corporate Event</div>
                  <div className="text-sm text-muted-foreground">Acme Inc.</div>
                </TableCell>
                <TableCell>July 10, 2024</TableCell>
                <TableCell>6:00 PM - 10:00 PM</TableCell>
                <TableCell>Acme Convention Center, Los Angeles</TableCell>
                <TableCell className="text-right">
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Birthday Party</div>
                  <div className="text-sm text-muted-foreground">Sarah Johnson</div>
                </TableCell>
                <TableCell>August 5, 2024</TableCell>
                <TableCell>7:00 PM - 11:00 PM</TableCell>
                <TableCell>Acme Event Hall, Chicago</TableCell>
                <TableCell className="text-right">
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>)
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


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
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


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


// function XIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>)
//   );
// }
