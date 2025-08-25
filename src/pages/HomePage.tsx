import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import RideOptions from '@/components/landing/RideOptions';
// You can also create and import a Features/Safety section here

const HomePage = () => {
  return (
    // Remove container and padding from the main layout for a full-width experience
    <div className="-mt-8 -mx-4 md:-mx-8">
      <Hero />
      <HowItWorks />
      <RideOptions />
      {/* Add other sections like a Safety section or Testimonials here */}
    </div>
  );
};

export default HomePage;