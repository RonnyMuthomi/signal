import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
 import '../styles/booking.css';

export function Reviews() {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/api/one/${portfolioId}`);
        setPortfolio(res.data);
      } catch (err) {
        setError('Failed to fetch portfolio data. Please try again later.');
      }
    };
    fetchPortfolio();
  }, [portfolioId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-start space-y-6">
          <div className="portfolio-detail flex flex-col items-start  space-y-4">
            <img
              src={`http://localhost:8081/${portfolio.image}`} 
            
              alt="Event Planning"
              className="rounded-xl w-full object-cover"
            />
            <h2 className="text-xl font-bold">{portfolio.caption}</h2>
            <div className='Host'>
              <Link to={`/MessageHost/${portfolioId}`}>
                <button className="bg-[#8559ec] text-black rounded-md font-serif text-xl">Message Host</button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Elevate Your Events with Vetted Professionals
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Discover the convenience and benefits of booking professional photographers and event organizers online.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Access to Vetted Professionals</h3>
            <p className="text-muted-foreground">
              Our platform connects you with a curated selection of experienced photographers and event organizers,
              ensuring you get the best talent for your event.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Hassle-Free Booking</h3>
            <p className="text-muted-foreground">
              Streamline your event planning process with our easy-to-use booking system. Secure your preferred
              professionals with just a few clicks.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Guaranteed Quality</h3>
            <p className="text-muted-foreground">
              Our professionals are vetted for their expertise, reliability, and commitment to delivering exceptional
              service. You can trust that your event will be in good hands.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Customer Testimonials</h3>
            <div className="grid gap-4">
              <div className="bg-muted rounded-lg p-4 flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-muted-foreground mb-2">
                    Working with the photographers from this platform was a game-changer for our company event. The
                    photos were stunning, and the process was seamless.
                  </p>
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">Event Planner, Acme Inc.</div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-muted-foreground mb-2">
                    Ive used this platform to book photographers for multiple events, and Ive been consistently
                    impressed with the quality of their work and the ease of the booking process.
                  </p>
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm text-muted-foreground">Event Organizer, XYZ Corp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
