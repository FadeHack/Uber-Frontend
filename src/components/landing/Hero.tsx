import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div
      className="relative text-white text-center py-40 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628947733273-cdae71c9bfd3')" }} // Assumes image is in /public
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Go anywhere with Uber</h1>
        <p className="text-xl mb-8">Request a ride, hop in, and go.</p>
        <Link to="/book-ride">
          <Button size="lg" className="text-lg px-8 py-6">
            Get a ride now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;