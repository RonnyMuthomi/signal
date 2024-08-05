
import {Link} from "react-router-dom"

export function VendorHome() {
  return (
    (<div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CameraIcon className="size-6" />
          <span className="sr-only">Capture Moments</span>
        </Link>
       
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div
              className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1
                  className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Capture Moments, Celebrate Life
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We are a team of passionate photographers and event organizers dedicated to creating unforgettable
                  experiences for our clients.
                </p>
                <div className="mt-6">
                <Link to='/VendorDashboard'><button className='buttons bg-pink-800 mt-12 ml-[5rem] h-[6vh] w-[12rem] rounded-[1rem] text-white'>

                  Join as a Vendor today</button></Link> 
                </div>
              </div>
              <img
                src="/vendor1.png"
                width="1200"
                height="800"
                alt="Hero"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover" />
            </div>
          </div>
        </section>
        <section id="photography" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Photography</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Capturing Lifes Moments</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From weddings to corporate events, we have the expertise to capture the essence of your special
                  occasion.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div>
                <img
                  src="/vendor3.png"
                  width="550"
                  height="310"
                  alt="Photography"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Weddings</h3>
                  <p className="text-sm text-muted-foreground">Capture the joy and love of your special day.</p>
                </div>
              </div>
              <div>
                <img
                  src="/corporate1.png"
                  width="550"
                  height="310"
                  alt="Photography"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Corporate Events</h3>
                  <p className="text-sm text-muted-foreground">Showcase your brand and capture memorable moments.</p>
                </div>
              </div>
              <div>
                <img
                  src="/corparate2.png"
                  width="550"
                  height="310"
                  alt="Photography"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Parties</h3>
                  <p className="text-sm text-muted-foreground">
                    Capture the energy and excitement of your celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Event Planning</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bringing Your Vision to Life</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From intimate gatherings to large-scale events, we have the expertise to plan and execute your event
                  seamlessly.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div>
                <img
                  src="/corparate3.png"
                  width="550"
                  height="310"
                  alt="Events"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Weddings</h3>
                  <p className="text-sm text-muted-foreground">
                    From intimate ceremonies to grand receptions, we ll help you create the wedding of your dreams.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/corporate4.png"
                  width="550"
                  height="310"
                  alt="Events"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Corporate Events</h3>
                  <p className="text-sm text-muted-foreground">
                    Elevate your brand and impress your guests with our corporate event planning expertise.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/corporate5.png"
                  width="550"
                  height="310"
                  alt="Events"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Parties</h3>
                  <p className="text-sm text-muted-foreground">
                    From birthdays to anniversaries, we ll help you create a memorable celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Passion for Capturing Moments</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Capture Moments, we are a team of passionate photographers and event organizers who believe in the
                  power of capturing life most precious moments. Our mission is to provide our clients with an
                  exceptional experience, from the planning stages to the final product.
                </p>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We understand the importance of creating a seamless and memorable event, whether its a wedding,
                  corporate function, or private celebration. Our expertise in event planning and photography allows us
                  to bring your vision to life, ensuring that every detail is meticulously executed.
                </p>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of professionals is dedicated to staying up-to-date with the latest trends and techniques in
                  the industry, ensuring that we deliver the highest quality results. We take pride in our ability to
                  capture the essence of each event, preserving the memories that will be cherished for years to come.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Weddings</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team specializes in capturing the essence of your wedding day, from the intimate moments to the
                    grand celebrations.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Corporate Events</h3>
                  <p className="text-sm text-muted-foreground">
                    We understand the importance of showcasing your brand and creating a lasting impression on your
                    guests. Our event planning and photography services are tailored to elevate your corporate events.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="mt-4 grid gap-1">
                  <h3 className="text-lg font-bold">Parties</h3>
                  <p className="text-sm text-muted-foreground">
                    From intimate gatherings to grand celebrations, we ll help you create a memorable event that
                    captures the energy and excitement of your special occasion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
