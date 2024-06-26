/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vYL2hef9Tsd
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
//import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Dboard() {
  return (
    (<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <a className="flex items-center gap-2 font-semibold" href="#">
              <CameraIcon className="h-6 w-6" />
              <span className="">Capture Moments</span>
            </a>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium  bg-gray-100/40">
              <a
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#">
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </a>
              <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <UserIcon className="h-4 w-4" />
                Profile
              </a>
              <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <CalendarIcon className="h-4 w-4" />
                Bookings
              </a>
              <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <MailIcon className="h-4 w-4" />
                Messages
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <a className="lg:hidden" href="#">
            <CameraIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search clients, bookings, etc."
                  type="search" />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 flex flex-col gap-6 p-4 md:gap-8 md:p-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-6">
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80" />
                    <div>
                      <div className="text-lg font-semibold">John Doe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Photographer</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    John is a professional photographer with over 10 years of experience in capturing the most memorable
                    moments. He specializes in wedding, portrait, and event photography.
                  </div>
                  <div className="grid gap-2">
                    <div className="font-medium">Portfolio</div>
                    <div className="grid grid-cols-3 gap-2">
                      <img
                        alt="Portfolio"
                        className="aspect-square rounded-md object-cover"
                        height="100"
                        src="/placeholder.svg"
                        width="100" />
                      <img
                        alt="Portfolio"
                        className="aspect-square rounded-md object-cover"
                        height="100"
                        src="/placeholder.svg"
                        width="100" />
                      <img
                        alt="Portfolio"
                        className="aspect-square rounded-md object-cover"
                        height="100"
                        src="/placeholder.svg"
                        width="100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Client"
                          className="rounded-full"
                          height="40"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width="40" />
                        <div>
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Wedding Photography</div>
                        </div>
                      </div>
                      <Badge variant="success">Booked</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Client"
                          className="rounded-full"
                          height="40"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width="40" />
                        <div>
                          <div className="font-medium">Michael Johnson</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Portrait Photography</div>
                        </div>
                      </div>
                      <Badge variant="danger">Not Booked</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Client"
                          className="rounded-full"
                          height="40"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width="40" />
                        <div>
                          <div className="font-medium">Emily Davis</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Event Photography</div>
                        </div>
                      </div>
                      <Badge variant="success">Booked</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <CalendarIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">New Booking</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Jane Smith has booked you for a wedding photography session on June 15th.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                        <MailIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">New Message</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Michael Johnson has sent you a message about a portrait photography session.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                        <ClockIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Upcoming Event</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Your event photography session with Emily Davis is scheduled for next Saturday.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Client"
                          className="rounded-full"
                          height="40"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width="40" />
                        <div>
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Wedding Photography</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Client"
                          className="rounded-full"
                          height="40"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width="40" />
                        <div>
                          <div className="font-medium">Michael Johnson</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Portrait Photography</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">1 day ago</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Client"
                          className="rounded-full"
                          height="40"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width="40" />
                        <div>
                          <div className="font-medium">Emily Davis</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Event Photography</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">3 days ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
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


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
