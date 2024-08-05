

//import {Link} from "react-router-dom"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function NotificationPage() {
  return (
    (<div className="flex flex-col min-h-screen">
      {/* <header className="bg-background border-b px-4 sm:px-6 flex items-center h-16">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CameraIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Capture</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}>
            Notifications
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}>
            Messages
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}>
            Events
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg"
                  width={32}
                  height={32}
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header> */}
      <main className="flex-1 py-6 sm:py-10">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <div className="ml-auto flex items-center gap-4">
             
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <FilterIcon className="h-4 w-4" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>Unread</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Read</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex items-center gap-4 pb-2">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Acme Inc</div>
                  <div className="text-sm text-muted-foreground">2 hours ago</div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <MoveHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ArchiveIcon className="w-4 h-4 mr-2" />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2Icon className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <p>Your event request has been approved. Please let us know if you need any further assistance.</p>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span>Reply</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <CheckIcon className="h-4 w-4" />
                  <span>Mark as Read</span>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4 pb-2">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">1 day ago</div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <MoveHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ArchiveIcon className="w-4 h-4 mr-2" />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2Icon className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <p>
                  Hi, I d like to book your photography services for my upcoming wedding. Can we schedule a call to
                  discuss the details?
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span>Reply</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <CheckIcon className="h-4 w-4" />
                  <span>Mark as Read</span>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4 pb-2">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">3 days ago</div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <MoveHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ArchiveIcon className="w-4 h-4 mr-2" />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2Icon className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <p>
                  I m interested in your event photography services. Can you send me more information about your
                  packages and pricing?
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span>Reply</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <CheckIcon className="h-4 w-4" />
                  <span>Mark as Read</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>)
  );
}

function ArchiveIcon(props) {
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
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>)
  );
}


// function CameraIcon(props) {
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
//       <path
//         d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
//       <circle cx="12" cy="13" r="3" />
//     </svg>)
//   );
// }


function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
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


function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>)
  );
}


function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>)
  );
}


// function SearchIcon(props) {
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
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>)
//   );
// }


function Trash2Icon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>)
  );
}
