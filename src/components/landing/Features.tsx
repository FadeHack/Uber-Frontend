const Features = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Why ride with Uber?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center p-4">
          <h3 className="text-2xl font-semibold mb-2">Tap a button, get a ride</h3>
          <p>Choose your destination, find a ride in minutes.</p>
        </div>
        <div className="text-center p-4">
          <h3 className="text-2xl font-semibold mb-2">Know your price</h3>
          <p>See the cost of your ride upfront before you book.</p>
        </div>
        <div className="text-center p-4">
          <h3 className="text-2xl font-semibold mb-2">Safety first</h3>
          <p>We’re committed to helping make every trip a safe one.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;